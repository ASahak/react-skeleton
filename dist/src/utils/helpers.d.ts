import { ALIGN_ITEMS, MARGIN_SIDES } from '../common/enums';
import { Device, GridKeyType, IGenerateCSSGridAreaArgs, IGrid, ISkeleton, Responsive, SkeletonKeyType } from '../common/types';

export declare const responsiveInstance: (instance: Partial<Record<GridKeyType, any>> | Partial<Record<SkeletonKeyType, any>>) => Responsive;
export declare const getAdaptiveData: (grid: Partial<Record<GridKeyType, any>>, device: Device | null) => any;
export declare const generateDefaultValues: () => any;
export declare const convertToArray: (str: string) => string[];
export declare const overrideSides: (side: MARGIN_SIDES, value: string, newValue: string) => string[];
export declare const valueWithPrefix: (v: any) => {
    value: string;
    unit: string;
};
export declare const generateMargin: (marginProp: IGrid['margin']) => string;
export declare const generateGridArea: (row: (ISkeleton | IGrid)[], cb: (index: number, prop: 'w', value: string | number) => void) => string;
export declare const generateGridAreaAsColDirection: (items: (ISkeleton | IGrid)[], alignItems: ALIGN_ITEMS, cb: (index: number, prop: 'h', value: string | number) => void) => string;
export declare const mutateWithRepeated: (repeatCount: number, currentKey: string, item: IGrid | ISkeleton, index: number) => {
    isRepeated: boolean;
    key: string;
    item: ISkeleton | IGrid;
} | {
    key: string;
    item: ISkeleton | IGrid;
    isRepeated?: undefined;
};
export declare const putInitialValuesIfNotExists: (item: ISkeleton | IGrid, isSkeleton?: boolean) => ISkeleton | IGrid;
export declare const itemsWithRepeat: (items: (ISkeleton | IGrid)[], repeatCount: number) => any;
export declare const setOpacity: (viewIndex: number, repeatCount: number, rowsLength: number, withOpacity?: boolean) => number;
export declare const generateCSSGridArea: ({ grid, hasChildren, skeletons, children, repeatCount, reservedProps, keyLevel, }: IGenerateCSSGridAreaArgs) => string;
export declare const findAbsentIndex: (base: string, arr: string[]) => number;
export declare const generateBorders: ({ keyLevel, highlightedNode, parent, isDark, hasChildren, }: {
    keyLevel: string;
    highlightedNode: string;
    parent?: string | undefined;
    isDark: boolean;
    hasChildren: boolean;
}) => {
    boxShadow: string;
} | {
    boxShadow?: undefined;
};
export declare const findTrap: (node: HTMLElement | null, highlightedNode: string, trap: (key: string) => void) => void;
export declare const getParent: (path: string) => string;
export declare const copyExecCommand: (target: HTMLElement) => void;
export declare const applicableValue: (v: string) => string;
export declare const isClickedOnSkeleton: (key: string, skeletons: Record<string, ISkeleton>) => boolean;
export declare const filterFromSkeleton: (e: string) => boolean;
export declare const isSkeletonHighlighted: (highlightedNode: string) => boolean;
export declare const getDirectParentWithDataKeyAttr: (node: HTMLElement) => HTMLElement | null;
export declare const filterFromPx: (value: string) => number;
export declare const convertInitialZeroToValueItSelf: (newValue: string) => string;
export declare const parseStyleObject: (cssString: string) => Record<string, any>;
export declare const cssToReactStyle: (styles: Record<string, any>) => Record<string, any>;
