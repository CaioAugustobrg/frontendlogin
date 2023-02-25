import { useState } from "react";
import { Topo, Container, Title, Button, Form } from "../styles";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    font-family: 'Inter', sans-serif;
  }`;

  
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
   try {
      fetch(`http://localhost:3030/login`, {
         method: 'POST',
         body: JSON.stringify({ email, password}),
      })
   } catch (error) {
      console.log(error)
   }
  


   e.preventDefault()
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Topo>
          <Title>
            Welcome to ng.cash application
            <span>
              <p> a young way to take care of your cash!</p>
            </span>
          </Title>
        </Topo>
        <main>
          <Form>
            <form onSubmit={onSubmit}>
              <label>Write your best email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="johnnysilverhand@email.com"
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <label>Write your password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <Button>ENTER!</Button>
              <span>Do not have an account?</span>
            </form>
          </Form>
        </main>
      </Container>
    </>
  );
}

export default Login;
