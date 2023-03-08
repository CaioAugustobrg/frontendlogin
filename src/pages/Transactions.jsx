import {React, useContext} from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import userContext from '../context/userContext';
import { Container, Header, Main, Profile, Icon } from '../styles/styles.transactions';

const Transactions = () => {
	const {username} = useContext(userContext);
	console.log(username);
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
						<h1>Olá,  {`${username}`}. <Icon><AiOutlineUser /></Icon></h1>
						<span>Your currently balance is: </span>
					</Profile>
				</Main>
			</Container>
		</>
	);
}; export default Transactions;