import ListItem from "./ListItem";
import ListForm from "./ListForm";
import Container from "./Container";

import styled from "styled-components";
import { useState } from "react";
import StatusBar from "./StatusBar";

const Paper = styled.div`
border: 1px lightgray solid;
box-shadow: -1px 5px 10px darkgray;
`
const List = styled.ul`
margin: 0;
`
const Greeting = styled.h2`
margin: 20px;
`

function ListContainer({ userState }) {
  const [user, setUser] = userState;
  const [error, setError] = useState();

  const addItemToUser = newItem => setUser({
    ...user,
    todos: [
      ...user.todos,
      newItem
    ]
  })
  const removeItemFromUser = id => setUser({
    ...user,
    todos: user.todos.filter(item => item.id !== id)
  })
  const addItem = name => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({name: name}),
    }
    fetch("/api/todos", config)
    .then(r => {
      if (r.ok) {
        !!error && setError();
        return r.json().then(addItemToUser)
      } else {
        setError("Item failed to save to database");
        return r.json().then(console.error)
      }
    })
    .catch(error => console.error("WE'RE GOING DOOOOWN ==>", error))
  }
  const deleteItem = id => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    fetch(`/api/todos/${id}`, config)
    .then(r => {
      if (r.ok) {
        !!error && setError();
        removeItemFromUser(id)
      } else {
        setError("Item failed to delete from database");
        return r.json().then(console.error)
      }
    })
    .catch(error => console.error("WE'RE GOING DOOOOWN ==>", error))
  }

  return (
    <Paper>
      {!!error && <StatusBar status="error">{error}</StatusBar>}
      <Greeting>Hi, {user.name}!</Greeting>
      <ListForm handleAdd={addItem} />
      <List>
        {user.todos.map(todo => (
          <ListItem 
            key={todo.id} 
            handleDelete={deleteItem} 
            item={todo}
          />
        ))}
      </List>
    </Paper>
  )
}

export default ListContainer;