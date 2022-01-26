import styled from "styled-components"


const StyledDiv = styled.div`
margin: 50px;
`

function Container({ children }) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container;