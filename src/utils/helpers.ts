import parse from 'style-to-object';
import { ALIGN_ITEMS, DIRECTION } from '@/common/enums';
import {
	CONTAINER_INITIAL_VALUES,
	DEFAULT_GRID_CONTAINER_HEIGHT,
	DEFAULT_GRID_CONTAINER_WIDTH,
	DEFAULT_HEIGHT,
	DEFAULT_WIDTH,
	SKELETON_INITIAL_VALUES,
	STYLE_PARSING_REGEXP,
} from '@/constants/general-settings';
import {
	Device,
	GridKeyType,
	IGenerateCSSGridAreaArgs,
	IGrid,
	ISkeleton,
	KeysInObject,
} from '@/common/types';

export const getAdaptiveData = (
	grid: Partial<Record<GridKeyType, any>>,
	device: Device | null,
	isSkeleton?: boolean
) => {
	return device !== 'desktop' && device && Object.hasOwn(grid, 'responsive')
		? {
				...putInitialValuesIfNotExists(
					grid.responsive[device] ?? {},
					isSkeleton
				),
				...(Object.hasOwn(grid, 'children') && { children: grid.children }),
				...(Object.hasOwn(grid, 'skeletons') && {
					skeletons: grid.skeletons,
				}),
			}
		: putInitialValuesIfNotExists(grid, isSkeleton);
};

export const convertToArray = (str: string) =>
	str.replace(/\[|\]/g, '')?.split(',') || [];

const isNumber = (n: string | number): boolean =>
	!isNaN(parseFloat(String(n))) && isFinite(Number(n));

export const generateMargin = (marginProp: IGrid['margin'], unit: string) => {
	const marginDetect = () => {
		let [t, r, b, l] = convertToArray(marginProp as string);
		if (t && !r && !b && !l) {
			r = t;
			b = t;
			l = t;
		} else {
			if (!t) {
				t = b || '0';
			}
			if (!r) {
				r = l || '0';
			}
			if (!b) {
				b = t || '0';
			}
			if (!l) {
				l = r || '0';
			}
		}
		return [t, r, b, l].reduce((acc, item: string) => {
			acc += isNumber(item) ? item + `${unit} ` : item + ' ';
			return acc;
		}, '');
	};

	return marginDetect();
};

export const generateGridArea = (
	row: (ISkeleton | IGrid)[],
	cb: (index: number, prop: 'w', value: string | number) => void
) => {
	return row.reduce((acc: string, item, index) => {
		const isFunction = typeof item.w === 'function';
		if (isFunction) {
			const w = (item.w as any)();
			acc += (Array.isArray(item) ? DEFAULT_GRID_CONTAINER_WIDTH : w) + ' ';
			cb(index, 'w', w);
		} else {
			acc += Array.isArray(item)
				? DEFAULT_GRID_CONTAINER_WIDTH
				: (item.w === DEFAULT_WIDTH ? '1fr' : item.w) + ' ';
		}
		return acc;
	}, '1fr / ');
};

export const generateGridAreaAsColDirection = (
	items: (ISkeleton | IGrid)[],
	alignItems: ALIGN_ITEMS,
	cb: (index: number, prop: 'h', value: string | number) => void
) => {
	return (
		items.reduce((acc, item, index) => {
			const isFunction = typeof item.h === 'function';
			if (isFunction) {
				const h = (item.h as any)();
				acc +=
					(alignItems === 'center' ? DEFAULT_GRID_CONTAINER_HEIGHT : h) + ' ';
				cb(index, 'h', h);
			} else {
				acc +=
					(alignItems === 'center'
						? DEFAULT_GRID_CONTAINER_HEIGHT
						: !item.h || item.h === DEFAULT_HEIGHT
							? DEFAULT_GRID_CONTAINER_HEIGHT
							: item.h) + ' ';
			}
			return acc;
		}, '') + ' / 1fr'
	);
};

export const mutateWithRepeated = (
	repeatCount: number,
	currentKey: string,
	item: IGrid | ISkeleton,
	index: number
) => {
	return repeatCount > 0 && index > 0
		? {
				isRepeated: true,
				key: currentKey + '_repeated_' + index,
				item,
			}
		: { key: currentKey + '_' + (index + 1), item };
};

export const putInitialValuesIfNotExists = (
	item: ISkeleton | IGrid,
	isSkeleton?: boolean
) => {
	function mutate<T extends object, U>(initialValues: T) {
		return Object.keys(initialValues).reduce(
			(acc, key) => {
				const typedKey = key as KeysInObject<T>;

				if (!(typedKey in item)) {
					(acc as any)[typedKey] = initialValues[typedKey];
				}
				return acc;
			},
			{ ...item } as U
		);
	}

	if (isSkeleton) {
		return mutate<typeof SKELETON_INITIAL_VALUES, ISkeleton>(
			SKELETON_INITIAL_VALUES
		);
	} else {
		return mutate<typeof CONTAINER_INITIAL_VALUES, IGrid>(
			CONTAINER_INITIAL_VALUES
		);
	}
};

export const itemsWithRepeat = (
	items: (ISkeleton | IGrid | string)[],
	repeatCount: number
) => {
	return repeatCount > 0 && items[0]
		? [].constructor(repeatCount).fill(items[0])
		: items;
};

export const setOpacity = (
	viewIndex: number,
	repeatCount: number,
	rowsLength: number,
	withOpacity?: boolean
) => {
	return (repeatCount || rowsLength) > 0 && withOpacity
		? 1 - (1 / (repeatCount || rowsLength)) * viewIndex
		: 1;
};

export const generateCSSGridArea = ({
	grid,
	hasChildren,
	skeletons,
	children,
	repeatCount,
	reservedProps,
	keyLevel,
}: IGenerateCSSGridAreaArgs) => {
	return grid.direction === DIRECTION.ROW
		? generateGridArea(
				(hasChildren
					? children
					: itemsWithRepeat(skeletons as ISkeleton[], repeatCount)
				).map(({ w = DEFAULT_GRID_CONTAINER_WIDTH }) => ({ w })),
				(index, prop, val) => {
					if (!reservedProps[`${keyLevel}_${index + 1}` as any]) {
						reservedProps[`${keyLevel}_${index + 1}`] = {};
					}
					reservedProps[`${keyLevel}_${index + 1}`][prop] = val;
				}
			)
		: generateGridAreaAsColDirection(
				(hasChildren
					? children
					: itemsWithRepeat(skeletons as ISkeleton[], repeatCount)) as (
					| ISkeleton
					| IGrid
				)[],
				grid.alignItems as ALIGN_ITEMS,
				(index, prop, val) => {
					if (!reservedProps[`${keyLevel}_${index + 1}`]) {
						reservedProps[`${keyLevel}_${index + 1}`] = {};
					}
					reservedProps[`${keyLevel}_${index + 1}`][prop] = val;
				}
			);
};

export const applicableValue = (v: string): string => {
	if (v.indexOf('fr') > -1) {
		return 'auto';
	}

	return v;
};

export const filterFromPx = (value: string): number =>
	Number(value.split('px')[0]);

export const parseStyleObject = (cssString: string) => {
	const styles: string = cssString.replace(STYLE_PARSING_REGEXP, '');

	return parse(styles) as Record<string, any>;
};

export const cssToReactStyle = (styles: Record<string, any>) => {
	const styleObject: Record<string, any> = {};

	Object.keys(styles).forEach((styleProp) => {
		const camelCaseProperty = styleProp.replace(/-([a-z])/g, (match, letter) =>
			letter.toUpperCase()
		);
		styleObject[camelCaseProperty] = styles[styleProp];
	});

	return styleObject;
};
