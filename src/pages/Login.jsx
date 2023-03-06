import { React ,useState } from 'react';
import { Header, Container, Button, Input, Label, Main, Footer } from '../styles/styles.login';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  }`;

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const isEmailValid = (email) => {
		const emailRegex = new RegExp(
			/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
		);
		if (emailRegex.test(email)) {
			return 1;
		}
		return 0;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		
		console.log(email, password);

		if  	 (email == ''
				|| !isEmailValid(email)
				|| password == ''
				|| password.length < 8) {
			alert('Be sure you give a valid email and a password with more than 8 caracters!');
			return;
		}

		try {
			await axios.post(
				'http://localhost:3030/login',
				JSON.stringify({ email, password }),
				{
					headers: { 'Content-Type': 'application/json' },
				},
				navigate('/Main'),
			);
			
		} catch (error) {
			true,
			console.log(error);
			if (error.response.status === 400) {
				alert('Invalid email or password');
			}
			
		}
	
	};
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header>
					<h1>Welcome to ng.cash application</h1>
					<span>
						a young way to take care of your money!
					</span>		
				</Header>
		
				<Main>
					<form method='POST'>	
						<Label>Write your email</Label>
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

						<Footer>
							<a href='/Register'>Do not have an account?</a>
						</Footer>

					</form>
				</Main>
			</Container>
		</>
	);
};

export default Login;
