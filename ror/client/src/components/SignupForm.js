import Input from "./Input";
import Button from "./Button";
import StatusBar from "./StatusBar";
import Form from "./Form";
import { useState } from "react";


function SignupForm({ setUser, setUserIsNew }) {

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  const handleFormChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSignup = (e) => {
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    }
    fetch("/api/users", config)
    .then(r => {
      if (r.ok) {
        return r.json().then(setUser)
      } else {
        return r.json().then(info => {
          setErrors(() => info.errors);
        })
      }
    })
    .catch(error => console.error("MAYDAAAAAAAYYY ==>", error))
  }

  return (
    <>
      <h2>Sign Up</h2>
      <Form>
        {errors.map(error => <StatusBar key={error} status="error">{error}</StatusBar>)}
        <Input 
          name="name"
          label="Name"
          type="text"
          value={formData.name || ""}
          onChange={handleFormChange}
        />
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
        <Input 
          name="password_confirmation"
          label="Password confirmation"
          type="password"
          value={formData.password_confirmation || ""}
          onChange={handleFormChange}
        />
        <Button onClick={handleSignup}>Create Account</Button>
        <Button onClick={e => {
          e.preventDefault();
          setUserIsNew(false)
        }}>Already Have One?</Button>
      </Form>
    </>
  )
}

export default SignupForm;