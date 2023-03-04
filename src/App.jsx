import { React } from 'react';
import { createGlobalStyle } from 'styled-components';
import Paths from './routes/routes';


export const GlobalStyle = createGlobalStyle`
  html,body {
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
	
    box-sizing: border-box;
		flex-direction: column;
    margin: 0;
    padding: 0;
		height: 100%;
		width: 100%;
		background-color: #000;
	
   
  }
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
