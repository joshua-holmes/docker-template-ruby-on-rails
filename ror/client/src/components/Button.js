import styled from "styled-components";

const StyledButton = styled.button`
margin: 10px;
background-color: orange;
font-size: 18px;
border-radius: 5px;
&:hover {
  background-color: #fc9;
}
&:active {
  background-color: #c60;
  color: white;
}
`

function Button({ children, onClick }) {
  

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;