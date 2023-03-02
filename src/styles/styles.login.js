import styled from 'styled-components';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

  flex-direction: row;
  background-color: #000;
`;

export const Topo = styled.div``;

export const Form = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

  background-color: #6271;
  flex-direction: column;

 
  form {
    flex-direction: column;
    display: flex;
  }
  span {
    color: #ff003c;
    p {
      font-family: "Inter", sans-serif;
    }
  }
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  font-size: 1.5em;
  text-align: center;
  color: #f3e600;

  span {
    font-family: "Inter", sans-serif;
    color:  #9400d3;
  }
`;
export const Label = styled.label`
    text-align: left;
    margin: 15px 0 0 0;
    color: #f3e600;
    font-family: "Inter", sans-serif;
    font-size: 20px;
 
`;

export const Input = styled.input`
background-color:#9400d3   ;
color: #000;
border: none;
z-index: 1;
font-size: 15px;

`;

export const Button = styled.button`
  margin-top: 15px;
  background-color: #f3e600;
  color: #9400d3;
  font-size: 25px;
  font-weight: bold;
`;