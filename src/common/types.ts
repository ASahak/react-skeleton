import {
	ALIGN_ITEMS,
	COLOR_MODES,
	DIRECTION,
	JUSTIFY_CONTENT,
} from '@/common/enums';

export type KeysInObject<T extends object> = keyof T;

export type ColorTheme = {
	main: string;
	gradient: string;
};

export type ColorThemes = {
	[COLOR_MODES.DARK]: ColorTheme;
	[COLOR_MODES.LIGHT]: ColorTheme;
};

export type Breakpoints = {
	mobile: string;
	tablet: string;
	desktop: string;
};

export type SkeletonKeyType =
	| 'w'
	| 'h'
	| 'margin'
	| 'r'
	| 'skeletonW'
	| 'responsive';

export type GridKeyType =
	| 'gridGap'
	| 'repeatCount'
	| 'direction'
	| 'className'
	| 'margin'
	| 'w'
	| 'h'
	| 'alignItems'
	| 'justifyContent'
	| 'withOpacity'
	| 'children'
	| 'skeletons'
	| 'styles'
	| 'responsive';

export type Responsive = Partial<Record<Device, any>>;
export type ResponsiveInstance = Record<'responsive', Responsive>;

export type SizeFunction = () => number | string;
export interface ISkeleton
	extends Pick<IGrid, 'w' | 'h' | 'margin' | 'isRepeated' | 'responsive'> {
	r?: string | number;
	skeletonW?: number | string;
}
export interface IGrid {
	direction?: DIRECTION;
	gridGap?: number | string;
	repeatCount?: number;
	className?: string;
	margin?: string;
	w?: SizeFunction | number | string;
	h?: SizeFunction | number | string;
	alignItems?: ALIGN_ITEMS;
	justifyContent?: JUSTIFY_CONTENT;
	withOpacity?: boolean;
	styles?: string;
	children?: IGrid[];
	skeletons?: ISkeleton[];
	isRepeated?: boolean;
	responsive?: Responsive;
}

export type Device = 'mobile' | 'tablet' | 'desktop';

export interface IGenerateCSSGridAreaArgs {
	grid: IGrid;
	hasChildren: boolean;
	children: IGrid[];
	skeletons: ISkeleton[];
	repeatCount: number;
	reservedProps: Record<string, any>;
	keyLevel: string;
}

export interface IGridLayout {
	grid: IGrid;
	dataKey: string;
	index: number;
	length: number;
	reservedPropsFromParent?: Record<string, any>;
}
