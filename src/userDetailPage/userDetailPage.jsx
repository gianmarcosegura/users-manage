import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ContainerPage, Box, Input, Label } from '../styles';
import { history } from '../_helpers';

import { userActions, alertActions } from '../_actions';

export const UserDetailPage = () => {
	const userSelected = useSelector((state) => state.users.user);
	const idUser = history.location.pathname.replace(/[^0-9]/g, '');
	const [updateClose, setUpdate] = useState(true);
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = (values) => {
		if (JSON.stringify(userSelected).includes(JSON.stringify(values).replace(/{|}/g, ''))) {
			// dispatch(alertActions.error('User havent been modified'))
		} else {
			dispatch(userActions.update(idUser, values, users));
		}
	};

	useEffect(() => {
		dispatch(userActions.getUserById(idUser, users));
	}, [dispatch]);

	function handleDeleteUser() {
		dispatch(userActions.delete(userSelected.id, users));
	}

	function changeState() {
		setUpdate(!updateClose);
	}

	function logOut() {
		history.push('/login');
		dispatch(alertActions.success('Logged Out. See you soon!'));
	}

	return (
		<>
			{userSelected && (
				<ContainerPage>
					<Tooltip title="Go Back" className="goBackButton">
						<IconButton onClick={history.goBack}>
							<ArrowBackIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Log Out" className="logOutButton">
						<IconButton onClick={logOut}>
							<ExitToAppIcon />
						</IconButton>
					</Tooltip>
					<Box>
						<form onSubmit={handleSubmit(onSubmit)}>
							<img src={userSelected.avatar} alt="" width={128} height={128} className="userAvatar" />
							<Label> Email: </Label>
							<Input
								name="email"
								defaultValue={userSelected.email}
								disabled={updateClose}
								ref={register({
									required: 'Required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'invalid email address'
									}
								})}
							/>
							<span className="errorFormMessage">{errors.email && errors.email.message}</span>

							<Label> First Name: </Label>
							<Input
								name="first_name"
								defaultValue={userSelected.first_name}
								disabled={updateClose}
								maxLength={25}
								ref={register({
									required: 'Required'
								})}
							/>
							<span className="errorFormMessage">{errors.first_name && errors.first_name.message}</span>

							<Label> Last Name: </Label>
							<Input
								name="last_name"
								defaultValue={userSelected.last_name}
								disabled={updateClose}
								maxLength={25}
								ref={register({
									validate: (value) => value !== 'admin' || 'Nice try!',
									required: 'Required'
								})}
							/>
							<span className="errorFormMessage">{errors.last_name && errors.last_name.message}</span>

							{updateClose ? (
								<>
									<Button
										onClick={changeState}
										className="buttonUi"
										variant="contained"
										color="primary"
										disableElevation
									>
										Modify
									</Button>

									<Button
										onClick={handleDeleteUser}
										className="buttonUi"
										variant="contained"
										color="secondary"
										disableElevation
									>
										Delete
									</Button>
								</>
							) : (
								<>
									<Button
										type="submit"
										className="buttonUi"
										variant="contained"
										color="primary"
										disableElevation
									>
										Submit
									</Button>
									<Button
										onClick={changeState}
										className="buttonUi"
										variant="contained"
										color="primary"
										disableElevation
									>
										Cancel
									</Button>
								</>
							)}
						</form>
					</Box>
				</ContainerPage>
			)}
		</>
	);
};
