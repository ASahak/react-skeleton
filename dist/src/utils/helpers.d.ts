import { ALIGN_ITEMS } from '../common/enums';
import { Device, GridKeyType, IGenerateCSSGridAreaArgs, IGrid, ISkeleton } from '../common/types';

export declare const getAdaptiveData: (grid: Partial<Record<GridKeyType, any>>, device: Device | null, isSkeleton?: boolean) => ISkeleton | IGrid;
export declare const convertToArray: (str: string) => string[];
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
export declare const itemsWithRepeat: (items: (ISkeleton | IGrid | string)[], repeatCount: number) => any;
export declare const setOpacity: (viewIndex: number, repeatCount: number, rowsLength: number, withOpacity?: boolean) => number;
export declare const generateCSSGridArea: ({ grid, hasChildren, skeletons, children, repeatCount, reservedProps, keyLevel, }: IGenerateCSSGridAreaArgs) => string;
export declare const applicableValue: (v: string) => string;
export declare const filterFromPx: (value: string) => number;
export declare const parseStyleObject: (cssString: string) => Record<string, any>;
export declare const cssToReactStyle: (styles: Record<string, any>) => Record<string, any>;
