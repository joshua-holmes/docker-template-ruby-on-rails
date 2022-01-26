import Input from "./Input";
import Button from "./Button";
import StatusBar from "./StatusBar";
import Form from "./Form";
import { useState } from "react";

function SigninForm({ setUser, setUserIsNew }) {

  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState([])

  const login = e => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    }
    fetch("/api/login", config)
    .then(r => {
      if (r.ok) {
        return r.json().then(setUser)
      } else {
        return r.json().then(info => setErrors(info.errors))
      }
    })
    .catch(error => console.error("MAYDAAAAAAAYYY ==>", error))
  }

  const handleFormChange = e => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <>
      <h2>Sign In</h2>
      <Form>
        {errors.map(error => <StatusBar key={error} status="error">{error}</StatusBar>)}
        <Input 
          name="username"
          label="Username"
          type="text"
          value={formData.username || ""}
          onChange={handleFormChange}
        />
        <Input 
          name="password"
          label="Password"
          type="password"
          value={formData.password || ""}
          onChange={handleFormChange}
        />
        <Button onClick={login}>Login</Button>
        <Button onClick={e => {
          e.preventDefault();
          setUserIsNew(true);
        }}>Don't Have One?</Button>
      </Form>
    </>
  )
}

export default SigninForm;