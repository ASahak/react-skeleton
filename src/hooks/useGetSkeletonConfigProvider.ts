import { useContext } from 'react';
import { SkeletonGeneratorContext } from '@/contexts/skeleton-generator';

export const useGetSkeletonConfigProvider = () => {
	const context = useContext(SkeletonGeneratorContext);

	if (context === undefined) {
		throw Error('You must run this hook inside ReactSkeletonProvider');
	}

	return context;
};
