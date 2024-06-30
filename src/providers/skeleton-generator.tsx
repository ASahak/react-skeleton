import { SkeletonGeneratorContext } from '@/contexts/skeleton-generator';
import { Breakpoints, ColorThemes } from '@/common/types';
import {
	DEFAULT_BREAKPOINTS,
	DEFAULT_COLOR_THEMES,
} from '@/constants/general-settings';

export const ReactSkeletonProvider = ({
	children,
	isDark = false,
	colorTheme = DEFAULT_COLOR_THEMES,
	breakpoints = DEFAULT_BREAKPOINTS,
}: Readonly<{
	isDark?: boolean;
	children: React.ReactNode;
	breakpoints?: Breakpoints;
	colorTheme?: ColorThemes;
}>) => {
	return (
		<SkeletonGeneratorContext.Provider
			value={{
				isDark,
				colorTheme,
				breakpoints,
			}}
		>
			{children}
		</SkeletonGeneratorContext.Provider>
	);
};
