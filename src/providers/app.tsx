import { Chakra } from './chakra';
import { ReactSkeletonProvider } from '@/providers/skeleton-generator';
import { Skeleton } from '@/components';
import { SKELETON_ANIMATION_VARIANTS } from '@/common/enums';

export const AppProviders = () => {
	return (
		<Chakra>
			<ReactSkeletonProvider
				value={{
					skeletonAnimation: 'slide' as SKELETON_ANIMATION_VARIANTS,
					colorTheme: {
						dark: {
							main: '#282c34',
							gradient: '#2c303a',
						},
						light: {
							main: '#f1f1f1',
							gradient: '#ececec',
						},
					},
					breakpoints: {
						mobile: '576px',
						tablet: '961px',
						desktop: '962px',
					},
				}}
			>
				<Skeleton
					styles={{
						width: '100%',
						height: '100%',
					}}
					grid={{
						responsive: {
							tablet: {
								direction: 'column',
							},
						},
						children: [
							{
								responsive: {},
								skeletons: [
									{
										skeletonW: '200',
										responsive: {
											mobile: {
												skeletonW: 100,
											},
											tablet: {
												skeletonW: 100,
											},
										},
									},
								],
							},
							{
								responsive: {},
							},
						],
					}}
				/>
			</ReactSkeletonProvider>
		</Chakra>
	);
};
