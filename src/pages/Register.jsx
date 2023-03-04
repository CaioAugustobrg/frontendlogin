import axios from 'axios';
import React, { useState } from 'react';
import { Container, Header, Button, Main, Label, Input } from '../styles/styles.register';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password, email);

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