import {React, useContext, useEffect, useState} from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import userContext from '../context/userContext';
import { useCookies } from 'react-cookie';
import { Container, Header, Main, Profile, Icon } from '../styles/styles.transactions';

import apiService from '../services/api';

const Transactions = () => {
	const [accounts, setAccounts] = useState([]);
	const {username} = useContext(userContext);
	const [cookies] = useCookies(['signed_token']);
	const token = cookies.signed_token;
	console.log(token);
	console.log(username);

	async function getAllAccounts() {
	
		await apiService.get('/getAllAccounts')
			.then(req => req.json( token))
			.then(setAccounts(accounts));
	
	}
		
	console.error(accounts);

	

	// 	const getAccounts = await axios.get('http://localhost:3030/getAllAccounts',
	// 		{
	// 			withCredentials: true,
	// 		}
	// 	);
	// 	console.log(getAccounts);
	// } catch (error) {
	// 	console.error(error);
	// }
	

	useEffect(() => {
		getAllAccounts();
	}, []);

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
						<span>Your currently balance is: </span>
						{accounts.map(accounts => 
							<div key={accounts.id}>
								<h3>{accounts.userId}</h3>
								<p>{accounts.balance}</p>
							</div>
						)}
							
					</Profile>
				</Main>
			</Container>
		</>
	);

}; 
export default Transactions;