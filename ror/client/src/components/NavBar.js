import { Link } from "react-router-dom";
import styled from 'styled-components';



const NavLink = styled(Link)`
text-decoration: none;
color: inherit;
border-right: 2px solid lightblue;
margin: auto;
padding: 10px 50px;
display: inline-box;
/* These styles only apply to the logout button,
    since it is a different component */
${({ as }) => {
  if (as === "button") {
    return (`
    background-color: inherit;
    border: none;
    position: absolute;
    right: 0;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
    `)
  }
}}
/*  */
&:hover {
  background-color: lightblue;
}
@media (max-width: 500px) {
  padding: 10px 25px;
}
@media (max-width: 320px) {
  padding: 10px 15px;
}
`
const Bar = styled.div`
height: 39px;
border-bottom: 2px solid lightblue;
border-top: 2px solid lightblue;
`
const Title = styled.h1`
padding-left: 20px;
margin: 5px;
color: #f7a;
-webkit-text-stroke: 1px black;
font-family: 'Permanent Marker', cursive;
font-size: 3em;
@media (max-width: 400px) {
  font-size: 2em;
}
`

function NavBar({ isLoggedIn, setUser }) {

  const logout = () => {
    fetch("/api/logout", {method: "DELETE"})
    .then(() => setUser())
    .catch(error => console.error("BLIMEY!! Something went wrong... ==>", error))
  }

  return (
    <>
      <Title>To-Do List App</Title>
      <Bar>
        <NavLink to="/">{isLoggedIn ? "To-Dos" : "Home"}</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        {isLoggedIn && <NavLink as="button" onClick={logout}>LogOut</NavLink>}
      </Bar>
    </>
  );
}

export default NavBar;
