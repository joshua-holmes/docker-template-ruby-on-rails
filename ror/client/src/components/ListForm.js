import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function ListForm({ handleAdd }) {
  const [inputValue, setInputValue] = useState("")

  return (
    <form>
      <Input 
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button onClick={e => {
        e.preventDefault();
        setInputValue("")
        handleAdd(inputValue)
      }}>Add</Button>
    </form>
  )
}

export default ListForm;