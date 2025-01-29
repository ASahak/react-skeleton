import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

export const Chakra = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: false,
				}}
			>
				{children}
			</ColorModeProvider>
		</ChakraProvider>
	);
};
