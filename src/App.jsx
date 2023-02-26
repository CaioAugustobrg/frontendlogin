import { React, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  
      `;

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<GlobalStyle />
			<Login /> 
     
		</div>
	);
}

export default App;
