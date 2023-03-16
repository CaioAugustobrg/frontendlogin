import React, { useContext, useState} from 'react';
import { Header, Container, Button, Input, Label, Main, Footer } from '../styles/styles.login';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import axios from 'axios';
import userContext from '../context/userContext';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  }`;

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {username, setUsername, setAuthToken} = useContext(userContext);

	const isEmailValid = (email) => {
		const emailRegex = new RegExp(
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		);
		if (emailRegex.test(email)) {
			return 1;
		}
		return 0;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		
		console.log(email, password, username);

		if  	 (email == ''
				|| !isEmailValid(email)
				|| password == ''
				|| password.length < 8
				|| username < 3
				|| username == '') {
			alert('Be sure you give a valid email, a password with more than 8 caracters and a username with more than 3 caracters!');
			return;
		}

		
		await axios.post(
			'http://localhost:3030/login',
			JSON.stringify({ email, password, username }),
			{ 
				headers: { 'Content-Type': 'application/json' },
			},
			
			
		) .then((res) => {
			setAuthToken(res.data);
			console.log(setAuthToken);
		});
		navigate('/Transactions');	
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
						<Label>Write your username</Label>
						<Input
							type='text'
							name='username'
							required
							placeholder='Johnny Silverhand'
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						></Input>
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
