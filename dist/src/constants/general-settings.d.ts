import { GridKeyType } from '../common/types';

export declare const STYLE_PARSING_REGEXP: RegExp;
export declare const DEFAULT_RADIUS = "0px";
export declare const DEFAULT_GAP = "1";
export declare const DEFAULT_SKELETON_WIDTH = "100%";
export declare const DEFAULT_GRID_CONTAINER_WIDTH = "1fr";
export declare const DEFAULT_GRID_CONTAINER_HEIGHT = "1fr";
export declare const DEFAULT_HEIGHT = "100%";
export declare const DEFAULT_WIDTH = "100%";
export declare const DEFAULT_DIRECTION_GRID_COLS = "row";
export declare const DEFAULT_JUSTIFY_ALIGNMENT = "flex-start";
export declare const DEFAULT_ALIGN_ITEMS_ALIGNMENT = "flex-start";
export declare const DEFAULT_GRID_STYLE = "1fr / 1fr";
export declare const DEFAULT_REPEAT_COUNT = 0;
export declare const DEFAULT_VARIANT = "gray";
export declare const DEFAULT_SKELETON_GRADIENT_WIDTH = 100;
export declare const ROOT_KEY = "grid_1";
export declare const TREE_ELEMENTS_SPACING: {
    MAX: number;
    MIN: number;
    DEFAULT: number;
};
export declare const DEFAULT_COLOR_THEMES: {
    dark: {
        main: string;
        gradient: string;
    };
    light: {
        main: string;
        gradient: string;
    };
};
export declare const DEFAULT_BREAKPOINTS: {
    mobile: string;
    tablet: string;
    desktop: string;
};
export declare const REPEAT_COUNT_RANGE: {
    MAX: number;
    MIN: number;
    DEFAULT: number;
};
export declare const CONTAINER_INITIAL_VALUES: Partial<Record<GridKeyType, any>>;
export declare const SKELETON_INITIAL_VALUES: {
    margin: string;
    w: string;
    h: string;
    r: string;
    skeletonW: number;
};
export declare const SIZE_UNITS_INITIAL_VALUES: {
    fn: string;
    auto: string;
    "%": string;
    px: string;
    fr: string;
    rem: string;
    vh: string;
    vw: string;
    pc: string;
    cm: string;
    mm: string;
    in: string;
    pt: string;
    ch: string;
    em: string;
    vmin: string;
    vmax: string;
};
export declare const SKELETON_ANIMATIONS: {
    slide: {
        from: {
            left: string;
        };
        to: {
            left: string;
        };
    };
    fade: {
        from: {
            opacity: string;
        };
        to: {
            opacity: string;
        };
    };
};
