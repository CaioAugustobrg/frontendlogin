import { React, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import Register from './pages/Register';
import Paths from './routes/routes';


const GlobalStyle = createGlobalStyle`
  
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  
      `;

function App() {
	

	return (
		<div className="App">
			<GlobalStyle />
			<Paths /> 
     
		</div>
	);
}

export default App;
