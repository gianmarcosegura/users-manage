import theme from 'styled-theming';

theme('mode', {
	default: '#3fe6ee',
	light: '#ffffff',
	dark: '#000000',
	nat: 'green',
	pacman: 'pink'
});

export const themeSettings = theme.variants('mode', 'variants', {
	background: {
		light: `${process.env.PUBLIC_URL}/background-light.jpg`,
		dark: `${process.env.PUBLIC_URL}/background-dark.jpg`,
		nat: `${process.env.PUBLIC_URL}/background-nat.jpg`,
		pacman: `${process.env.PUBLIC_URL}/background-pacman.jpg`
	},
	default: {
		light: '#ffb400',
		dark: '#1f5fda',
		nat: '#ec9a32',
		pacman: '#f791c3'
	},
	box: {
		light: '#e7ecff2b',
		dark: '#34479473',
		nat: '#718c0766',
		pacman: '#e50d0e3b'
	},
	hover: {
		light: '#65194c5e',
		dark: '#335ea247',
		nat: '#fff70052',
		pacman: '#0affff52'
	}
});

export const colors = theme.variants('mode', 'color', {
	default: {
		light: '#000000',
		dark: '#ffffff',
		nat: '#000000',
		pacman: '#000000'
	}
});
