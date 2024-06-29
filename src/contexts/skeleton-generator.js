import { createContext } from 'react';
import { DEFAULT_COLOR_THEMES } from '@/constants/general-settings';
export const SkeletonGeneratorContext = createContext({
	colorTheme: { ...DEFAULT_COLOR_THEMES },
	breakpoints: {
		// todo
		mobile: '576px',
		tablet: '961px',
		desktop: '962px',
	},
});
