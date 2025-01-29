import { extendTheme as extendChakraTheme } from '@chakra-ui/react';
import styles from '../globalStyles';
import foundations from './foundations';

export const breakpoints = {
	xs: '481px',
	sm: '577px',
	md: '768px',
	lg: '962px',
	xl: '1200px',
	'2xl': '1440px',
};

const overrides = {
	...foundations,
	styles,
	breakpoints,
};

export default extendChakraTheme(overrides);
