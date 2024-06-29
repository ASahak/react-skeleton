import { Context } from 'react';
import { Breakpoints, ColorThemes } from '../common/types';

export interface ISkeletonGeneratorContext {
    colorTheme: ColorThemes;
    breakpoints: Breakpoints;
}
export declare const SkeletonGeneratorContext: Context<ISkeletonGeneratorContext>;
