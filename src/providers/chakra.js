import { jsx as _jsx } from 'react/jsx-runtime';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
export const Chakra = ({ children }) => {
	return _jsx(ChakraProvider, {
		resetCSS: true,
		theme: theme,
		children: _jsx(ColorModeProvider, {
			options: {
				useSystemColorMode: false,
			},
			children: children,
		}),
	});
};
