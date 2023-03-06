import React from 'react';
import {BrowserRouter
as Router,
Route,
Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const Paths = () => { 
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path='/Main' element={<Main />} />
			
			</Routes>
		</Router>
	); };
export default Paths;