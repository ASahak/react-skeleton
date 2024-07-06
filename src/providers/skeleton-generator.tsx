import { SkeletonGeneratorContext } from '@/contexts/skeleton-generator';
import { Breakpoints, ColorThemes } from '@/common/types';
import {
	DEFAULT_BREAKPOINTS,
	DEFAULT_COLOR_THEMES,
} from '@/constants/general-settings';
import { SKELETON_ANIMATION_VARIANTS } from '@/common/enums';

export const ReactSkeletonProvider = ({
	children,
	value: {
		isDark = false,
		colorTheme = DEFAULT_COLOR_THEMES,
		breakpoints = DEFAULT_BREAKPOINTS,
		skeletonAnimation = SKELETON_ANIMATION_VARIANTS.SLIDE as SKELETON_ANIMATION_VARIANTS,
	},
}: Readonly<{
	value: {
		skeletonAnimation?: SKELETON_ANIMATION_VARIANTS;
		isDark?: boolean;
		breakpoints?: Breakpoints;
		colorTheme?: ColorThemes;
	};
	children: React.ReactNode;
}>) => {
	return (
		<SkeletonGeneratorContext.Provider
			value={{
				skeletonAnimation,
				isDark,
				colorTheme,
				breakpoints,
			}}
		>
			{children}
		</SkeletonGeneratorContext.Provider>
	);
};
