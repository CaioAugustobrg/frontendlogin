import styled from 'styled-components';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  flex-direction: column;
  background-color: #000;
`;

export const Topo = styled.header`
display: flex;
flex-direction: column`;

export const Form = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  background-color: #6271;
  flex-direction: column;
  display: flex;
  width: 500px;
  height: 300px;
  margin: 0 auto;
 
  span {
    color: #ff003c;
   h1 {
    height: 10px;
   }
    p {
      font-family: "Inter", sans-serif;
      height: 10px;
    }
  }
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  text-align: center;
  color: #f3e600;
  font-weight: bold;
  font-size: 25px;
  height: 10px;
`;

export const Subtitle = styled.div`
display: flex;
height: 10px;
span {
  color: red;
};
`;
export const Label = styled.label`
    text-align: left;
    color: #f3e600;
    font-family: "Inter", sans-serif;
    font-size: 20px;
`;

export const Input = styled.input`
background-color:#9400d3;
color: #000;
border: none;
font-size: 15px;
font-weight: 800;
width: 100%;
height: 150px;
border: 1px solid #f3e600;

&:focus {
  border: 1px solid #f3e600 ;
}
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 300px;
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