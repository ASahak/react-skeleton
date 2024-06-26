import { createContext, Context } from 'react';
import { Breakpoints, ColorThemes } from '@/common/types';
import { DEFAULT_COLOR_THEMES } from '@/constants/general-settings';

export interface ISkeletonGeneratorContext {
	colorTheme: ColorThemes;
	breakpoints: Breakpoints;
}

export const SkeletonGeneratorContext: Context<ISkeletonGeneratorContext> =
	createContext({
		colorTheme: { ...DEFAULT_COLOR_THEMES },
		breakpoints: {
			// todo
			mobile: '576px',
			tablet: '961px',
			desktop: '962px',
		},
	});
