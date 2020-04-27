import styled, { createGlobalStyle } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { themeSettings, colors } from './themes';

export const GlobalStyle = createGlobalStyle`
    #root {
        background: url( ${themeSettings} )
    }
`;

GlobalStyle.defaultProps = {
	variants: 'background'
};

export const CustomGrid = styled(Grid)`
	padding-top: 15px;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
	&.MuiGrid-container {
		position: absolute;
	}
`;

export const CustomToggleButton = styled(ToggleButton)`
	&.MuiToggleButton-root.Mui-selected {
		background: ${themeSettings};
		&:hover {
			background: ${themeSettings};
		}
	}
`;

CustomToggleButton.defaultProps = {
	variants: 'default'
};

export const ContainerPage = styled.div`
	position: relative;
	width: 420px;
	margin: auto;

	@media only screen and (max-width: 768px) {
		width: 100%;
		position: initial;
	}
`;

export const Box = styled.div`
	position: relative;
	z-index: 1;
	border-radius: 6px;
	background: ${themeSettings};
	color: #ffffff;
	padding: 45px;
	text-align: center;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

	@media only screen and (max-width: 768px) {
		background: transparent;
		box-shadow: none;
		padding: 20px;

		h3 {
			text-align: center;
		}
	}
`;

Box.defaultProps = {
	variants: 'box'
};

export const Input = styled.input`
	outline: 0;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	padding: 16px;
	border-radius: 6px;
	box-sizing: border-box;
	font-size: 14px;
`;

export const Button = styled.button`
	text-transform: uppercase;
	border-radius: 6px;
	margin-top: 40px;
	outline: none;
	background: ${themeSettings};
	width: 100%;
	border: 0;
	padding: 15px;
	color: ${colors};
	font-weight: bolder;
	font-size: 14px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;
	opacity: 0.85;
	transition: 0.3s;

	&:hover {
		opacity: 1;
	}
`;

Button.defaultProps = {
	variants: 'default'
};

export const Label = styled.label`
	letter-spacing: 1.2px;
	display: flex;
	margin: 0 0 5px;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
`;

export const ListItem = styled.li`
    color: ${colors};
    text-align: left;
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    &:hover {
        background: ${themeSettings};
    }
    & > a {
        display: flex;
        padding 8px 0;
    }
`;

ListItem.defaultProps = {
	variants: 'hover'
};

export const Avatar = styled.img`
	border-radius: 50%;
	width: 50px;
	margin-right: 15px;
`;

export const ListText = styled.div`
	border-bottom: 1px solid ${themeSettings};
	flex: 1;
	display: flex;
	align-items: center;
`;

ListText.defaultProps = {
	variants: 'default'
};

export const InputGroup = styled.div`
	margin-bottom: 20px;
`;

export const ErrorMsg = styled.div`
	display: flex;
	padding: 5px;
	background: ${themeSettings};
	opacity: 0.8;
	border-radius: 6px;
`;

ErrorMsg.defaultProps = {
	variants: 'default'
};
