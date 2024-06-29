import { jsx as _jsx } from 'react/jsx-runtime';
import { SkeletonGeneratorContext } from '@/contexts/skeleton-generator';
export const ReactSkeletonProvider = ({
	children,
	colorTheme,
	breakpoints,
}) => {
	return _jsx(SkeletonGeneratorContext.Provider, {
		value: {
			colorTheme,
			breakpoints,
		},
		children: children,
	});
};
