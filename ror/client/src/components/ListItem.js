import styled from "styled-components"
import { IoMdTrash } from "react-icons/io";

const Item = styled.li`
border-top: 1px lightgray solid;
padding: 15px 0;
list-style: none;
`
const Icon = styled(IoMdTrash)`
font-size: 1.5em;
margin: auto 15px;
float: right;
cursor: pointer;
&:hover {
  font-size: 1.8em;
  transform: translate(2px, -2px);
  transform: rotate(-30deg);
}
`

function ListItem({ item, handleDelete}) {

  return (
    <Item>
      {item.name}
      <Icon onClick={() => handleDelete(item.id)} color="#e80"/>  
    </Item>
  )
}

export default ListItem;