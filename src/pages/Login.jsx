import { React ,useState } from 'react';
import { Topo, Container, Title, Button, Form } from '../styles';
import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
							<p> a young way to take care of your cash!</p>
						</span>
					</Title>
				</Topo>
				<main>
					<Form>
						<form>
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

export default Login;
