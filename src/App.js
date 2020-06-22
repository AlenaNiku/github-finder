import React, { useState, useEffect} from 'react';
import './App.css';
import UserCard from './UserCard';
import { Button, Form } from "semantic-ui-react";

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  // const [userInput, setUserInput] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/example')
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [])

  const setData = ({ name, login, avatar_url}) => {
    setName(name)
    setUserName(login)
    setAvatar(avatar_url)
  }


  return (
    <>
      <div className="navbar">Github User Finder</div>

      <div className="search">
        <Form>
          <Form.Field>
            <label>Enter User Name</label>
            <input placeholder="User Name" />
          </Form.Field>
          
          <Button type="submit">Search</Button>
        </Form>
      </div>

      <UserCard avatar={avatar} name={name} userName={userName}/>
    </>
  );
}

export default App;
