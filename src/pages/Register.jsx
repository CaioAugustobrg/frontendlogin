
import axios  from 'axios';
import React, { useState } from 'react';
import { Container, Header, Button, Main, Label, Input } from '../styles/styles.register';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(username, password, email);

		const isEmailValid = (email) => {
			const emailRegex = new RegExp(
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
			);
			if (emailRegex.test(email)) {
				return 1;
			}
			return 0;

		};
		if 	(username === ''
				||	username.length < 3
				||	password === ''
				||	password.length < 8
				||	email === ''
				|| !isEmailValid(email)) {
			alert('Be sure you give an username with more than 3 caracters, a password with more than 8 caracters and a valid email!');
			return 1;
			
		}
		try {
			await axios.post(
				'http://localhost:3030/register',
				JSON.stringify({ email, password, username }),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
		
		} catch (error) {
			true,
			console.log(error);
			if (error.response.status === 406) {
				alert('Email is already in use for another user!');
			} else if (error.reponse.status === 400) {
				alert('Username is already in use for another user! ');
			}
		}
	};
	return (
		<>
		
			<Container>
				<Header>
					<h1>
						Welcome to ng.cash application
					</h1>
					<span>
					a young way to take care of your money!
					</span>
				</Header>

				<Main>
					<form method='POST'>
						<Label>Write your username</Label>
						<Input
							type='text'
							name='username'
							required
							placeholder='Johnny Silverhand'
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						></Input>
						<Label>Write your best email</Label>
						<Input
							type="email"
							name="email"
							required
							placeholder="johnnysilverhand@email.com"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						></Input>

						<Label>Write your password</Label>
						<Input
							type="password"
							name="password"
							required
							placeholder="********"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						></Input>
						<Button type="submit" onClick={(e) => onSubmit(e)}>
							REGISTER</Button>
					</form>
				</Main>
			</Container>
		</>
	);
};

export default Register;