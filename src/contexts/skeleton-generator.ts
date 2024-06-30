import { createContext, Context } from 'react';
import { Breakpoints, ColorThemes } from '@/common/types';
import {
	DEFAULT_BREAKPOINTS,
	DEFAULT_COLOR_THEMES,
} from '@/constants/general-settings';

export interface ISkeletonGeneratorContext {
	isDark?: boolean;
	colorTheme: ColorThemes;
	breakpoints: Breakpoints;
}

export const SkeletonGeneratorContext: Context<ISkeletonGeneratorContext> =
	createContext({
		colorTheme: { ...DEFAULT_COLOR_THEMES },
		breakpoints: { ...DEFAULT_BREAKPOINTS },
	});
