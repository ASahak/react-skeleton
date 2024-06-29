export default {
	global: (props) => ({
		html: {
			fontSize: '10px',
			[`@media only screen and (max-width: ${props.theme.breakpoints.lg})`]: {
				fontSize: '8px',
			},
		},
		'body, *': {
			fontFamily: 'Poppins,sans-serif;',
			margin: '0',
			boxSizing: 'border-box',
			padding: '0',
			fontSize: '100%',
		},
		'html, body, #root': {
			width: '100%',
			height: '100%;',
		},
	}),
};
