import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

function logIn(values) {
	return (dispatch) => {
		dispatch(requestLogIn(values.email));
		userService.logIn(values).then(
			(user) => {
				dispatch(successLogIn(values.email));
				localStorage.setItem('user', JSON.stringify(user.data.token));
				history.push('/');
				dispatch(alertActions.success('Logged In'));
			},
			(error) => {
				dispatch(errorLogin(error.toString()));
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function requestLogIn(user) {
		return { type: userConstants.LOGIN_REQUEST, user };
	}
	function successLogIn(user) {
		return { type: userConstants.LOGIN_SUCCESS, user };
	}
	function errorLogin(error) {
		return { type: userConstants.LOGIN_FAILURE, error };
	}
}

function logOut() {
	userService.logOut();
	return { type: userConstants.LOGOUT };
}

function getAll(users) {
	return (dispatch) => {
		if (users.users && users.users.length) {
			dispatch(successGetAll(users.users));
		} else if (!users.items) {
			dispatch(requestGetAll());
			userService.getAll().then(
				(users) => dispatch(successGetAll(users)),
				(error) => dispatch(errorGetAll(error.toString()))
			);
		}
	};

	function requestGetAll() {
		return { type: userConstants.GET_ALL_USERS_REQUEST };
	}
	function successGetAll(users) {
		return { type: userConstants.GET_ALL_USERS_SUCCESS, users };
	}
	function errorGetAll(error) {
		return { type: userConstants.GET_ALL_USERS_FAILURE, error };
	}
}

function getUserById(id, users) {
	return (dispatch) => {
		dispatch(requestGetUser(id));
		userService.getUser(Number(id), users).then(
			(user) => dispatch(successGetUser(user, users)),
			(error) => dispatch(errorGetUser(id, error.toString()))
		);
	};

	function requestGetUser(user) {
		return { type: userConstants.GET_USER_REQUEST, user };
	}
	function successGetUser(user, users) {
		return { type: userConstants.GET_USER_SUCCESS, user, users };
	}
	function errorGetUser(user, error) {
		return { type: userConstants.GET_USER_FAILURE, user, error };
	}
}

function update(id, userData, users) {
	return (dispatch) => {
		dispatch(requestUpdate(id));

		userService.update(Number(id), userData, users).then(
			(user) => {
				dispatch(successUpdate(user, userData));
				history.push('/users');
				dispatch(alertActions.success('User modified!'));
			},
			(error) => dispatch(errorUpdate(id, error.toString()))
		);
	};

	function requestUpdate(id) {
		return { type: userConstants.UPDATE_USER_REQUEST, id };
	}
	function successUpdate(users, user) {
		return { type: userConstants.UPDATE_USER_SUCCESS, users, user };
	}
	function errorUpdate(user, error) {
		return { type: userConstants.UPDATE_USER_FAILURE, user, error };
	}
}

function _delete(id, users) {
	return (dispatch) => {
		dispatch(requestDelete(id));
		userService.delete(id, users).then(
			(users) => {
				dispatch(successDelete(users));
				history.push('/users');
				dispatch(alertActions.success('User deleted!'));
			},
			(error) => dispatch(errorDelete(id, error.toString()))
		);
	};

	function requestDelete(idUser) {
		return { type: userConstants.DELETE_REQUEST, idUser };
	}
	function successDelete(users) {
		return { type: userConstants.DELETE_SUCCESS, users };
	}
	function errorDelete(idUser, error) {
		return { type: userConstants.DELETE_FAILURE, idUser, error };
	}
}

export const userActions = {
	logIn,
	logOut,
	getAll,
	getUserById,
	update,
	delete: _delete
};
