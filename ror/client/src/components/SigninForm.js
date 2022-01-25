import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

const Form = styled.form`
border: 4px solid #f7a;
background-color: #fdd;
`

function SigninForm() {
  
  return (
    <>
      <h2>Sign In</h2>
      <Form>
        <Input 
          name="username"
          label="Username"
          type="text"
        />
        <Input 
          name="password"
          label="Password"
          type="text"
        />
        <Button>Login</Button>
      </Form>
    </>
  )
}

export default SigninForm;