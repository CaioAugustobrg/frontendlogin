import { useState } from 'react'
import { Title, Topo, Body, Button,Form } from '../styles'

function Login() {
  const [count, setCount] = useState(0)

  return (
        <Body>
        <Topo>
     <Title>Welcome to ng.cash young application
        <span>A young way to take care of your cash!</span>
     </Title>
     </Topo>
     <main>
        <Form>
        <form method='POST'>
            <label>Write your best email</label>
            <input type="email" required placeholder='johnnysilverhand@email.com'></input>
            <label>Write your password</label>
            <input type="password" required placeholder='********'></input>
            <Button>ENTER!</Button>
            <span>Do not have an account?</span>
        </form>
        </Form>
     </main>
     </Body>
    
  )
}

export default Login;
