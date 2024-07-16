import { useWindowSize } from 'react-use';
import { Breakpoints, Device } from '@/common/types';
import { filterFromPx } from '@/utils/helpers';

export const useCalcDevice = (
	breakpoints: Breakpoints,
	customContainerWidth?: number
): Device => {
	const { width: containerWidth } = useWindowSize();
	const queryWidth = customContainerWidth ?? containerWidth;

	if (queryWidth <= filterFromPx(breakpoints.mobile)) return 'mobile';

	if (
		queryWidth > filterFromPx(breakpoints.mobile) &&
		queryWidth <= filterFromPx(breakpoints.tablet)
	)
		return 'tablet';

	return 'desktop';
};
