import { userConstants } from '../_constants';

export function users(state = {}, action) {
	switch (action.type) {
		case userConstants.GET_ALL_USERS_REQUEST:
			return {
				loading: true
			};
		case userConstants.GET_ALL_USERS_SUCCESS:
			return {
				items: action.users
			};
		case userConstants.GET_ALL_USERS_FAILURE:
			return {
				error: action.error
			};
		case userConstants.GET_USER_REQUEST:
			return {
				loading: true
			};
		case userConstants.GET_USER_SUCCESS:
			return {
				user: action.user,
				users: action.users.items
			};
		case userConstants.GET_USER_FAILURE:
			return {
				error: action.error
			};
		case userConstants.UPDATE_USER_REQUEST:
			return {
				loading: true
			};
		case userConstants.UPDATE_USER_SUCCESS:
			return {
				user: action.user,
				items: action.users
			};
		case userConstants.UPDATE_USER_FAILURE:
			return {
				error: action.error
			};
		case userConstants.DELETE_REQUEST:
			return {
				loading: true
			};
		case userConstants.DELETE_SUCCESS:
			return {
				items: action.users
			};
		case userConstants.DELETE_FAILURE:
			return {
				...state,
				items: state.items.map((user) => {
					if (user.id === action.id) {
						// make copy of user without 'deleting:true' property
						const { deleting, ...userCopy } = user;
						// return copy of user with 'deleteError:[error]' property
						return { ...userCopy, deleteError: action.error };
					}

					return user;
				})
			};
		default:
			return state;
	}
}
