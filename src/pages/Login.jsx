import { React ,useState } from 'react';
import { Topo, Container, Title, Button, Form, Input, Label } from '../styles/styles.login';
import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  }`;



const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = async (e) => {
	
		e.preventDefault();
		
		console.log(email, password);

		try {
			await axios.post(
				'http://localhost:3030/login',
				JSON.stringify({ email, password }),
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
			<GlobalStyle />
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
					<Form>
						<form>
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
                  ENTER!
							</Button>
							<span><a href='/Register'>Do not have an account?</a></span>
						</form>
					</Form>
				</main>
			</Container>
		</>
	);
};

export default Login;
