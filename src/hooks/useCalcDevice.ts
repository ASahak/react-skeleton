import { useWindowSize } from 'react-use';
import { Breakpoints, Device } from '@/common/types';
import { filterFromPx } from '@/utils/helpers';

export const useCalcDevice = (breakpoints: Breakpoints): Device => {
	const { width: containerWidth } = useWindowSize();

	if (containerWidth <= filterFromPx(breakpoints.mobile)) return 'mobile';

	if (
		containerWidth > filterFromPx(breakpoints.mobile) &&
		containerWidth <= filterFromPx(breakpoints.tablet)
	)
		return 'tablet';

	return 'desktop';
};
