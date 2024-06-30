import { Chakra } from './chakra';
import { ReactSkeletonProvider } from '@/providers/skeleton-generator';
import { Skeleton } from '@/components';

export const AppProviders = () => {
	return (
		<Chakra>
			<ReactSkeletonProvider>
				<Skeleton
					styles={{
						width: '100%',
						height: '100%',
					}}
					grid={{
						skeletons: [{}],
					}}
				/>
			</ReactSkeletonProvider>
		</Chakra>
	);
};
