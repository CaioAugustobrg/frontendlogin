import axios from 'axios';
import React, { useState } from 'react';
import { Topo, Container, Title, Button, Form, Label, Input } from '../styles/styles.register';

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
				<Topo>
					<Title>
						Welcome to ng.cash application
						<span>
							<p> a young way to take care of your money!</p>
						</span>
					</Title>
				</Topo>
				<main>
					<Form method='POST'>
						<form method='POST' >
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
					</Form>
				</main>
			</Container>
		</>
	);
};

export default Register;