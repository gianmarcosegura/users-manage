import axios from 'axios';

export const userService = {
	logIn,
	logOut,
	getAll,
	getUser,
	update,
	delete: _delete
};

function logIn(values) {
	return axios.post('https://reqres.in/api/login', {
		email: values.email,
		password: values.password
	});
}

// Elimina user del LocalStorage para cerrar sesión del usuario.
function logOut() {
	localStorage.removeItem('user');
}

function getAll() {
	return axios.get('https://reqres.in/api/users').then((res) => res.data.data);
}

function getUser(id, users) {
	if (users.items) {
		const user = users.items.filter((el) => el.id === id);
		return Promise.resolve(user[0]);
	}
	return axios.get(`https://reqres.in/api/users/${id}`).then((res) => res.data.data);
}

function update(id, userModif, users) {
	return axios.put(`https://reqres.in/api/users/${id}`, userModif).then(() => {
		if (users.users && users.users.length) {
			return users.users.map((user) => (user.id === id ? Object.assign(user, userModif) : user));
		}
		return axios.get('https://reqres.in/api/users').then((data) => {
			return data.data.data.map((user) => (user.id === id ? Object.assign(user, userModif) : user));
		});
	});
}

function _delete(id, users) {
	return axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
		if (users.users && users.users.length) {
			return users.users.filter((user) => user.id !== id);
		}
		return axios.get('https://reqres.in/api/users').then((data) => {
			return data.data.data.filter((user) => user.id !== id);
		});
	});
}
