import {
	DIRECTION,
	SIZE_UNITS,
	SKELETON_ANIMATION_VARIANTS,
} from '../common/enums';
import { GridKeyType } from '../common/types';
import { filterFromPx } from '../utils/helpers';
import { breakpoints } from '../styles/theme';

export const STYLE_PARSING_REGEXP = /(^\{|\}$)/g;

export const DEFAULT_RADIUS = '0px';
export const DEFAULT_GAP = '1'; // expressed by rem
export const DEFAULT_SKELETON_WIDTH = '100%';
export const DEFAULT_GRID_CONTAINER_WIDTH = '1fr';
export const DEFAULT_GRID_CONTAINER_HEIGHT = '1fr';
export const DEFAULT_HEIGHT = '100%';
export const DEFAULT_WIDTH = '100%';
export const DEFAULT_DIRECTION_GRID_COLS = 'row';
export const DEFAULT_JUSTIFY_ALIGNMENT = 'flex-start';
export const DEFAULT_ALIGN_ITEMS_ALIGNMENT = 'flex-start';
export const DEFAULT_GRID_STYLE = '1fr / 1fr';
export const DEFAULT_REPEAT_COUNT = 0;
export const DEFAULT_VARIANT = 'gray';
export const DEFAULT_SKELETON_GRADIENT_WIDTH = 100;

export const ROOT_KEY = 'grid_1';

export const DEFAULT_COLOR_THEMES = {
	dark: {
		main: '#282c34',
		gradient: '#2c303a',
	},
	light: {
		main: '#f1f1f1',
		gradient: '#ececec',
	},
};

export const DEFAULT_BREAKPOINTS = {
	mobile: `${filterFromPx(breakpoints.sm) - 1}px`,
	tablet: `${filterFromPx(breakpoints.lg) - 1}px`,
	desktop: breakpoints.lg,
};

export const CONTAINER_INITIAL_VALUES: Partial<Record<GridKeyType, any>> = {
	direction: DIRECTION.ROW,
	gridGap: DEFAULT_GAP,
	repeatCount: DEFAULT_REPEAT_COUNT,
	className: '',
	margin: '0',
	w: DEFAULT_WIDTH,
	h: DEFAULT_HEIGHT,
	alignItems: DEFAULT_ALIGN_ITEMS_ALIGNMENT,
	justifyContent: DEFAULT_JUSTIFY_ALIGNMENT,
	withOpacity: false,
	styles: `{}`,
};

export const SKELETON_INITIAL_VALUES = {
	margin: '0',
	w: DEFAULT_WIDTH,
	h: DEFAULT_HEIGHT,
	r: '0px',
	skeletonW: DEFAULT_SKELETON_GRADIENT_WIDTH,
};

export const SIZE_UNITS_INITIAL_VALUES = {
	[SIZE_UNITS.FN]: '',
	[SIZE_UNITS.AUTO]: 'auto',
	[SIZE_UNITS.PERCENT]: '100',
	[SIZE_UNITS.PX]: '100',
	[SIZE_UNITS.FR]: '1',
	[SIZE_UNITS.REM]: '1',
	[SIZE_UNITS.VH]: '100',
	[SIZE_UNITS.VW]: '100',
	[SIZE_UNITS.PC]: '1',
	[SIZE_UNITS.CM]: '1',
	[SIZE_UNITS.MM]: '100',
	[SIZE_UNITS.IN]: '1',
	[SIZE_UNITS.PT]: '1',
	[SIZE_UNITS.CH]: '1',
	[SIZE_UNITS.EM]: '1',
	[SIZE_UNITS.V_MIN]: '100',
	[SIZE_UNITS.V_MAX]: '100',
};

export const SKELETON_ANIMATIONS = {
	[SKELETON_ANIMATION_VARIANTS.SLIDE]: {
		from: { left: '-100%' },
		to: { left: '100%' },
	},
	[SKELETON_ANIMATION_VARIANTS.FADE]: {
		from: { opacity: '0' },
		to: { opacity: '1' },
	},
};
