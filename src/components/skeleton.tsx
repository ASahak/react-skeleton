import { memo, useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import {
	ColorTheme,
	IGrid,
	IGridLayout,
	ISkeleton,
	SizeFunction,
} from '@/common/types';
import {
	DEFAULT_HEIGHT,
	DEFAULT_SKELETON_GRADIENT_WIDTH,
	DEFAULT_WIDTH,
	ROOT_KEY,
} from '@/constants/general-settings';
import {
	applicableValue,
	cssToReactStyle,
	generateCSSGridArea,
	generateMargin,
	itemsWithRepeat,
	mutateWithRepeated,
	parseStyleObject,
	putInitialValuesIfNotExists,
	setOpacity,
} from '@/utils/helpers';
import { COLOR_MODES, DIRECTION } from '@/common/enums';
import { useGetSkeletonConfigProvider } from '@/hooks';

export type IProps = {
	grid: IGrid;
	styles?: Record<string, any>;
};
export const Skeleton = memo(({ grid: gridState, styles }: IProps) => {
	const { colorTheme, isDark } = useGetSkeletonConfigProvider();
	// const { colorMode } = useColorMode();
	// const device = useRecoilValue(selectDeviceState);
	// const gridState = useRecoilValue(selectGridState);
	// const skeletonsState = useRecoilValue(selectSkeletonsState);
	// const rootStyles = useRecoilValue(selectRootStylesState);
	// const colorTheme = useRecoilValue(
	//   selectColorThemeState(colorMode as COLOR_MODE)
	// );
	// const isDark = colorMode === 'dark';
	const currentModeTheme: ColorTheme = isDark
		? colorTheme[COLOR_MODES.DARK]
		: colorTheme[COLOR_MODES.LIGHT];

	const renderSkeletons = (
		skeletons: (ISkeleton & { key: string })[],
		repeatCount: number,
		containerDir: DIRECTION | undefined,
		withOpacity?: boolean,
		parentKey?: string | undefined
	) => {
		return skeletons.map(
			(skeleton: ISkeleton & { key: string }, index: number) => (
				<Box
					key={skeleton.key}
					data-key={skeleton.key}
					style={{
						width:
							parentKey && containerDir === DIRECTION.ROW
								? DEFAULT_WIDTH
								: applicableValue(
										(typeof skeleton.w === 'function'
											? (skeleton.w as SizeFunction)()
											: skeleton.w)!.toString()
									),
						height:
							parentKey && containerDir === DIRECTION.COLUMN
								? DEFAULT_HEIGHT
								: applicableValue(
										(typeof skeleton.h !== 'function'
											? skeleton.h
											: (skeleton.h as SizeFunction)())!.toString()
									),
						borderRadius: skeleton.r || '0px',
						margin: generateMargin(skeleton.margin || ''),
						backgroundColor: currentModeTheme.main,
						opacity: setOpacity(
							index,
							repeatCount,
							skeletons.length,
							withOpacity
						),
					}}
					position="relative"
					overflow="hidden"
				>
					{!skeleton.isRepeated ? (
						<Box
							display={skeleton.isRepeated ? 'none' : 'block'}
							left={0}
							position="absolute"
							h="full"
							top={0}
							style={{
								width: `${skeleton.skeletonW || DEFAULT_SKELETON_GRADIENT_WIDTH}px`,
								backgroundImage: `linear-gradient(
                90deg,
                ${currentModeTheme.main} 0px,
                ${currentModeTheme.gradient} ${(Number(skeleton.skeletonW) || DEFAULT_SKELETON_GRADIENT_WIDTH) / 2}px,
                ${currentModeTheme.main} ${skeleton.skeletonW || DEFAULT_SKELETON_GRADIENT_WIDTH}px
              )`,
							}}
						/>
					) : null}
				</Box>
			)
		);
	};

	const convertStyles = (styles: string) => {
		try {
			if (styles.replace(/\s/g, '') === '{}') {
				throw Error('Empty state');
			}
			const converted = parseStyleObject(styles);
			if (converted) {
				// should remove all margins and the others style properties to avoid duplication
				// because in the options already have that option
				Object.keys(converted).forEach((e: string) => {
					if (
						[
							'margin',
							'width',
							'height',
							'gap',
							'align-items',
							'justify-items',
						].includes(e)
					) {
						delete converted[e];
					}
				});
				return converted;
			}
		} catch {
			return {};
		}
	};

	const renderGridLayout = useCallback(
		({
			grid,
			dataKey,
			index,
			length,
			reservedPropsFromParent,
		}: IGridLayout) => {
			const keyLevel = dataKey;
			const _reservedPropsFromParent: any = {
				parent: keyLevel,
				withOpacity: grid.withOpacity,
			};
			const collectedChildren: (IGrid & { key: string })[] = [];
			const collectedSkeletons: (ISkeleton & { key: string })[] = [];
			const gridGap = (grid.gridGap || 0) + 'rem',
				hasChildren =
					Object.hasOwn(grid, 'children') &&
					Array.isArray(grid.children) &&
					grid.children.length > 0,
				hasSkeletons =
					Object.hasOwn(grid, 'skeletons') &&
					Array.isArray(grid.skeletons) &&
					grid.skeletons.length > 0,
				repeatCount: number = grid.repeatCount as number;

			if (repeatCount > 0) {
				_reservedPropsFromParent.repeatCount = repeatCount;
			}
			if (hasChildren) {
				itemsWithRepeat(grid.children!, repeatCount)
					.map(mutateWithRepeated.bind(null, repeatCount, keyLevel))
					.forEach(({ key, item }: { key: string; item: IGrid }) => {
						collectedChildren.push({
							// ...getAdaptiveData(gridState[path] as IGrid, device),
							// ...gridState[path] as IGrid, // todo
							...putInitialValuesIfNotExists(item),
							key,
						});
					});
			}
			if (hasSkeletons) {
				itemsWithRepeat(grid.skeletons!, repeatCount)
					.map(mutateWithRepeated.bind(null, repeatCount, keyLevel))
					.forEach(({ key, item }: { key: string; item: ISkeleton }) => {
						collectedSkeletons.push({
							// ...getAdaptiveData(skeletonsState[path] as ISkeleton, device), // todo
							...putInitialValuesIfNotExists(item, true),
							key,
						});
					});
			}
			const gridStyle = generateCSSGridArea({
					grid,
					hasChildren,
					children: collectedChildren,
					skeletons: collectedSkeletons,
					repeatCount,
					reservedProps: _reservedPropsFromParent,
					keyLevel,
				}),
				withOpacity = grid.withOpacity,
				style = convertStyles(grid.styles as string) || {};
			console.log(collectedChildren, collectedSkeletons, grid);
			return (
				<Box
					key={keyLevel}
					display="grid"
					data-key={keyLevel}
					style={{
						gap: gridGap,
						margin: generateMargin(grid.margin || ''),
						grid: gridStyle,
						height: reservedPropsFromParent?.parent
							? DEFAULT_HEIGHT
							: applicableValue(
									reservedPropsFromParent?.[keyLevel]?.h ??
										(typeof grid.h === 'function' ? grid.h() : grid.h)
								),
						width: reservedPropsFromParent?.parent
							? DEFAULT_WIDTH
							: applicableValue(
									reservedPropsFromParent?.[keyLevel]?.w ??
										(typeof grid.w === 'function' ? grid.w() : grid.w)
								),
						alignItems: grid.alignItems,
						justifyContent: grid.justifyContent,
						opacity: setOpacity(
							index,
							reservedPropsFromParent?.repeatCount,
							length,
							reservedPropsFromParent?.withOpacity
						),
						...cssToReactStyle(style),
					}}
					className={grid.className || ''}
				>
					{hasChildren
						? collectedChildren.map((child, gridItemIndex) =>
								renderGridLayout({
									grid: child,
									dataKey: child.key,
									index: gridItemIndex,
									length: collectedChildren.length,
									reservedPropsFromParent: _reservedPropsFromParent,
								})
							)
						: hasSkeletons
							? renderSkeletons(
									collectedSkeletons,
									repeatCount,
									grid.direction,
									withOpacity,
									_reservedPropsFromParent.parent
								)
							: null}
				</Box>
			);
		},
		[
			gridState,
			currentModeTheme,
			// isDark, colorTheme, device
		]
	);

	return (
		<Box style={styles ?? {}}>
			{renderGridLayout({
				grid: putInitialValuesIfNotExists(gridState) as IGrid,
				dataKey: ROOT_KEY,
				index: 0,
				length: 1,
			})}
		</Box>
	);
});
