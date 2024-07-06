import { createContext, Context } from 'react';
import { Breakpoints, ColorThemes } from '@/common/types';
import {
	DEFAULT_BREAKPOINTS,
	DEFAULT_COLOR_THEMES,
} from '@/constants/general-settings';
import { SKELETON_ANIMATION_VARIANTS } from '@/common/enums';

export interface ISkeletonGeneratorContext {
	isDark?: boolean;
	colorTheme: ColorThemes;
	breakpoints: Breakpoints;
	skeletonAnimation: SKELETON_ANIMATION_VARIANTS;
}

export const SkeletonGeneratorContext: Context<ISkeletonGeneratorContext> =
	createContext({
		colorTheme: { ...DEFAULT_COLOR_THEMES },
		breakpoints: { ...DEFAULT_BREAKPOINTS },
		skeletonAnimation:
			SKELETON_ANIMATION_VARIANTS.SLIDE as SKELETON_ANIMATION_VARIANTS,
	});
