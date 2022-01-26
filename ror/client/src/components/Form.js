import styled from "styled-components"

const StyledForm = styled.form`
border: 4px solid #f7a;
background-color: #fdd;
`

function Form({ children }) {
  return <StyledForm>{children}</StyledForm>
}

export default Form;