import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import React, { useEffect, useState } from '../../node_modules/react';
import { Router, Route, Switch, Redirect } from '../../node_modules/react-router-dom';
import { useDispatch, useSelector } from '../../node_modules/react-redux';
import { ThemeProvider } from '../../node_modules/styled-components';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { UsersListPage } from '../usersListPage/usersListPage';
import { LoginPage } from '../loginPage/loginPage';
import { UserDetailPage } from '../userDetailPage/userDetailPage';
import { GlobalStyle, CustomGrid, CustomToggleButton } from '../styles';
import './app.scss';

const App = () => {
	const alert = useSelector((state) => state.alert);
	const [themeColor, setTheme] = useState('light');
	const dispatch = useDispatch();

	useEffect(() => {
		history.listen(() => {
			setTimeout(() => {
				dispatch(alertActions.clear());
			}, 3000);
		});
	}, [dispatch]);

	const themes = [
		<CustomToggleButton key="light" value="light">
			<Brightness7Icon />
		</CustomToggleButton>,
		<CustomToggleButton key="dark" value="dark">
			<Brightness4Icon />
		</CustomToggleButton>,
		<CustomToggleButton key="nat" value="nat">
			<EmojiNatureIcon />
		</CustomToggleButton>,
		<CustomToggleButton key="pacman" value="pacman">
			<VideogameAssetIcon />
		</CustomToggleButton>
	];

	function changeTheme(event, newTheme) {
		if (newTheme !== null) {
			setTheme(newTheme);
		}
	}

	function Alert(props) {
		const { severity } = props;
		const { children } = props;
		return <MuiAlert elevation={6} variant="filled" severity={severity} children={children} />;
	}

	return (
		<ThemeProvider theme={{ mode: themeColor }}>
			<GlobalStyle />
			<CustomGrid container direction="row">
				{themes.map((theme) => (
					<Grid key={theme.key} item>
						<ToggleButtonGroup size="small" value={themeColor} exclusive onChange={changeTheme}>
							{theme}
						</ToggleButtonGroup>
					</Grid>
				))}
			</CustomGrid>
			<Router history={history}>
				<Switch>
					<Route path="/login" component={LoginPage} />
					<PrivateRoute exact path="/users" component={UsersListPage} />
					<PrivateRoute exact path="/users/:id" component={UserDetailPage} />
					<Redirect from="*" to="/users" />
				</Switch>
			</Router>
			{alert.message && (
				<Snackbar open>
					<Alert severity={alert.type}>{alert.message}</Alert>
				</Snackbar>
			)}
		</ThemeProvider>
	);
};

export { App };
