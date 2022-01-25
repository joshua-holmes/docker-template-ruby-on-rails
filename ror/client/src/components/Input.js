import styled from "styled-components";


const StyledDiv = styled.div`
padding: 20px;
`

function Input({ label, onChange, value, name, type }) {
  
  return (
    <StyledDiv>
      {label && <><label htmlFor={name}>{label}</label><br/></>}
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
    </StyledDiv>
  )
}

export default Input;