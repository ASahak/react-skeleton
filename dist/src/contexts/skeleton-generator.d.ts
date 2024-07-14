import { Context } from 'react';
import { Breakpoints, ColorThemes } from '../common/types';
import { SKELETON_ANIMATION_VARIANTS } from '../common/enums';

export interface ISkeletonGeneratorContext {
    isDark?: boolean;
    colorTheme: ColorThemes;
    breakpoints: Breakpoints;
    skeletonAnimation: SKELETON_ANIMATION_VARIANTS;
}
export declare const SkeletonGeneratorContext: Context<ISkeletonGeneratorContext>;
