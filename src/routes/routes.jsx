import React from 'react';
import {BrowserRouter
as Router,
Route,
Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Paths = () => { 
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Register" element={<Register />} />
			
			</Routes>
		</Router>
	); };
export default Paths;