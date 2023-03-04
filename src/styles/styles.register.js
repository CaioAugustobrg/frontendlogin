import styled from 'styled-components';


export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  flex-direction: column;
  background-color: #000;
  width: 550px;
  margin: auto;
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  color: #f3e600;
  font-weight: bold;
  font-size: 25px;
  text-align: center;

  span {
    font-family: "Inter", sans-serif;
    color: #9400d3;
    
  }
`;
export const Header = styled.header`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
margin: auto;

h1 {
  color: #f3e600;
};
span {
  color: #9400d3;
}`;


export const Main = styled.main`
width: 100%;
padding-bottom: 10px;
form {
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  background-color: #6271;
  flex-direction: column;
  display: flex;
  width: 450px;
  height: 400px;
  margin: auto;
  padding: 25px;
  gap: 10px;
  align-items: center;
  border: 2px solid green;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, #f3e600, #9400d3 );
  
}
`;

export const Label = styled.label`
    text-align: left;
    color: #f3e600;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    width: 100%;
    margin-top: 20px;
`;

export const Input = styled.input`
display: flex;
background-color:#9400d3;
color: #000;
border: none;
font-size: 15px;
font-weight: 800;
width: 100%;
height: 30px;
border: 1px solid #f3e600;

&:focus {
  border: 1px solid #f3e600 ;
}
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 80px;
  background-color: #f3e600;
  color: #9400d3;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: aqua;
  }
`;


