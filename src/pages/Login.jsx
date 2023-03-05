import { React ,useState } from 'react';
import { Header, Container, Button, Input, Label, Main, Footer } from '../styles/styles.login';
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

		if  (email == ''
				|| password == ''
				|| password.length < 8) {
			alert('Text an email!');
			return;
		}

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
