import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";

const StyledDiv = styled.div`
color: dark${props => props.color};
border-top: 1px solid ${props => props.color};
border-bottom: 1px solid ${props => props.color};
background-color: ${props => props.lightColor};
margin: 10px 0;
padding: 5px 10px;
`

function StatusBar({ children, status }) {
  let color;
  let lightColor;
  if (status === "success") {
    color = "green"
    lightColor = "lightgreen"
  } else if (status === "error") {
    color = "red"
    lightColor = "pink"
  }

  
  return (
    <StyledDiv color={color} lightColor={lightColor}><CgCloseO color={`dark${color}`}/> {children}</StyledDiv>
  )
}

export default StatusBar;