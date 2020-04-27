import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => (
	<Route
		render={(props) =>
			localStorage.getItem('user') ? (
				<Component
					location={props.location}
					history={props.history}
					match={props.match}
					staticContext={props.staticContext}
				/>
			) : (
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)
		}
	/>
);
