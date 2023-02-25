import styled from "styled-components";

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

  label {
    color: #04daf6;
    font-family: "Inter", sans-serif;
  }
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

export const Button = styled.button`
  background-color: #554b41;
  color: #04daf6;
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  font-size: 1.5em;
  text-align: center;
  color: #9400d3;

  span {
    font-family: "Inter", sans-serif;
    color: #f3e600;
  }
`;
