import { Link } from "react-router-dom";
import styled from 'styled-components';



const NavLink = styled(Link)`
text-decoration: none;
color: inherit;
border-right: 2px solid lightblue;
/* border-left: 2px solid lightblue; */
margin: auto;
padding: 15px 50px;
display: inline-flexbox;
&:hover {
  background-color: lightblue;
}
@media (max-width: 500px) {
  display: flex;
  border-right: none;
}
`
const Bar = styled.div`
height: 49px;
border-bottom: 2px solid lightblue;
`
function NavBar() {

  return (
    <Bar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
    </Bar>
  );
}

export default NavBar;
