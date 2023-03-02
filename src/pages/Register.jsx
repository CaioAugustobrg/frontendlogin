import axios from 'axios';
import React, { useState } from 'react';
import { Topo, Container, Title, Button, Form } from '../styles/styles.register';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async (e) => {
	
		e.preventDefault();
		
		console.log(email, password);

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
							<p> a young way to take care of your moeny!</p>
						</span>
					</Title>
				</Topo>
				<main>
					<Form>
						<form>
							<label>Write your username</label>
							<input
								type='text'
								name='username'
								required
								placeholder='Johnny Silverhand'
								onChange={(e) => setUsername(e.target.value)}
							></input>
							<label>Write your best email</label>
							<input
								type="email"
								name="email"
								required
								placeholder="johnnysilverhand@email.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							></input>

							<label>Write your password</label>
							<input
								type="password"
								name="password"
								required
								placeholder="********"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							></input>
							<Button>
								<button type="submit" onClick={(e) => onSubmit(e)}>
                  ENTER!
								</button>
							</Button>
							<span><a href='/Register'>Do not have an account?</a></span>
						</form>
					</Form>
				</main>
			</Container>
		</>
	);
};

export default Register;