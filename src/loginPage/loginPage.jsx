import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from '../_actions';
import { ContainerPage, Box, Input, Button, Label } from '../styles';

export const LoginPage = () => {
	const dispatch = useDispatch();
	const { handleSubmit, register, errors } = useForm();

	const onSubmit = (values) => {
		dispatch(userActions.logIn(values));
	};

	useEffect(() => {
		dispatch(userActions.logOut());
	}, [dispatch]);

	return (
		<ContainerPage>
			<Box>
				<form name="form" onSubmit={handleSubmit(onSubmit)}>
					<h2>Log In</h2>
					<Label> Email: </Label>
					<Input
						name="email"
						ref={register({
							required: 'Required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address'
							}
						})}
					/>
					<span className="errorFormMessage">{errors.email && errors.email.message}</span>
					<Label> Password: </Label>
					<Input
						type="password"
						name="password"
						autocomplete="on"
						ref={register({
							required: 'Required'
						})}
					/>
					<span className="errorFormMessage">{errors.password && errors.password.message}</span>
					<Button type="submit">Log In</Button>
				</form>
			</Box>
		</ContainerPage>
	);
};
