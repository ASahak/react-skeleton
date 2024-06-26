import { SkeletonGeneratorContext } from '@/contexts/skeleton-generator';
import { Breakpoints, ColorThemes } from '@/common/types';

export const ReactSkeletonProvider = ({
	children,
	colorTheme,
	breakpoints,
}: Readonly<{
	children: React.ReactNode;
	breakpoints: Breakpoints;
	colorTheme: ColorThemes;
}>) => {
	return (
		<SkeletonGeneratorContext.Provider
			value={{
				colorTheme,
				breakpoints,
			}}
		>
			{children}
		</SkeletonGeneratorContext.Provider>
	);
};
