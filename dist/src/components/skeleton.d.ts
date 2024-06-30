import { IGrid } from '../common/types';

export type IProps = {
    grid: IGrid;
    styles?: Record<string, any>;
};
export declare const Skeleton: import('react').MemoExoticComponent<({ grid: gridState, styles }: IProps) => import("react/jsx-runtime").JSX.Element>;
