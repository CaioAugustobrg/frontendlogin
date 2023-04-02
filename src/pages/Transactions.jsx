import {React, useEffect, useState} from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import { useCookies } from 'react-cookie';
import { Container, Header, Main, Profile, Icon } from '../styles/styles.transactions';

import apiService from '../services/api';

const Transactions = () => {
	const [accounts, setAccounts] = useState([]);
	const [users, setUsers] = useState([]);
	const username = localStorage.getItem('username');
	const [token_cookies] = useCookies(['signed_token']);
	const [user_id_cookies] = useCookies(['user_id']);
	const token = token_cookies.signed_token;
	const userId = user_id_cookies.user_id;
	const setTokenInsideCookies = localStorage.setItem('keepToken',token);
	const getTokenInsideCookies = localStorage.getItem(setTokenInsideCookies);
	const setIdInsideCookies = localStorage.getItem('keepId', userId);
	const getIdInsideCookies = localStorage.setItem(setIdInsideCookies);
	console.log(getTokenInsideCookies, getIdInsideCookies,token, userId);
	console.log(username);

	async function getAllAccounts() {
		await apiService.get('/getAllAccounts')
			.then(response => (setAccounts(response.data)));	
	}
	async function getAllUsers() {
		await apiService.get('/getAllUsers')
			.then(response => (setUsers(response.data)));
	}
	

	useEffect(() => {
		getAllAccounts() && getAllUsers();
	},[]);


	return (
		<>
			<Container>
				<Header>
					<h1>
					Transactions page
					</h1>
					<span>
        a young way to take care of your money!
					</span>
				</Header>
				<Main>
					<Profile>
						<h1>How its going?,  {`${username}`}. <Icon><AiOutlineUser /></Icon></h1>
						
						{accounts.map((account => (
							<li key={account.accountId}>
								<span>Your currently balance is:{account.balance} </span>
								<br></br>
								<span>{account.userId}</span>
								<br></br>
								<span>{account.accountId}</span>
							</li>
						))) 
						}
						{users.map((user => (
							<li key={user.id}>
								<span>{user.username}</span>
							</li>
						)))}
							
					</Profile>
				</Main>
			</Container>
		</>
	);

}; 
export default Transactions;