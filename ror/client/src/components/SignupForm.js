import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

const Form = styled.form`
border: 4px solid #f7a;
background-color: #fdd;
`

function SignupForm() {

  const handleSignup = (e) => {
    e.preventDefault()
    console.log("message")
  }

  return (
    <>
      <h2>Sign Up</h2>
      <Form>
        <Input 
          name="name"
          label="Name"
          type="text"
        />
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
        <Input 
          name="password-confirmation"
          label="Password confirmation"
          type="text"
        />
        <Button onClick={handleSignup}>Create Account</Button>
      </Form>
    </>
  )
}

export default SignupForm;