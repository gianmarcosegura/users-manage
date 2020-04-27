import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { ContainerPage, Box, List, ListItem, Avatar, ListText } from '../styles';
import { history } from '../_helpers';
import { userActions, alertActions } from '../_actions';

export const UsersListPage = () => {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.getAll(users));
	}, [dispatch]);

	function logOut() {
		history.push('/login');
		dispatch(alertActions.success('Logged Out. See you soon!'));
	}

	return (
		<ContainerPage>
			<Tooltip title="Log Out" className="logOutButton">
				<IconButton onClick={logOut}>
					<ExitToAppIcon />
				</IconButton>
			</Tooltip>
			<Box>
				<h2 className="usersTitle">Users</h2>
				{users.items && (
					<List>
						{users.items.map((user) => (
							<ListItem key={user.id}>
								<Link to={`/users/${user.id}`}>
									<Avatar src={user.avatar} width={50} height={50} />
									<ListText>
										<span>{`${user.first_name} ${user.last_name}`}</span>
									</ListText>
								</Link>
							</ListItem>
						))}
					</List>
				)}
			</Box>
		</ContainerPage>
	);
};
