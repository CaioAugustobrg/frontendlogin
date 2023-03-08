import styled from 'styled-components';


export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  flex-direction: column;
  background-color: #000;
  width: 550px;
  margin: auto;
`;

export const Header = styled.header`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
margin: auto;
span {
  color: red;
}
h1 {
  color: red;
};`;

export const Profile = styled.div`
background-color: #9400d3;
display: inline;
h1 {
 background-color: #9400d3;
};
span {
 
};
 



`;

export const Icon = styled.div`
display: inline-block;
background-color: aliceblue;
`;

export const Main = styled.main`
width: 100%;
padding-bottom: 10px;`;