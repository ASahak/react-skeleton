import { Breakpoints, ColorThemes } from '../common/types';
import { SKELETON_ANIMATION_VARIANTS } from '../common/enums';

export declare const ReactSkeletonProvider: ({ children, value: { isDark, colorTheme, breakpoints, skeletonAnimation, }, }: Readonly<{
    value: {
        skeletonAnimation?: SKELETON_ANIMATION_VARIANTS | undefined;
        isDark?: boolean | undefined;
        breakpoints?: Breakpoints | undefined;
        colorTheme?: ColorThemes | undefined;
    };
    children: React.ReactNode;
}>) => import("react/jsx-runtime").JSX.Element;
