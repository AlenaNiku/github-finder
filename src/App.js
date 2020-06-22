import React, { useState, useEffect} from 'react';
import './App.css';
import UserCard from './UserCard';
import { Button, Form } from "semantic-ui-react";

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [location, setLocation] = useState('')
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/alenaniku')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])

  const setData = ({ name, login, avatar_url, location }) => {
    setName(name)
    setUserName(login)
    setAvatar(avatar_url)
    setLocation(location)
  };

  // change the state on search
  const handleSearchUser = (e) => {
    setUserInput([e.target.value])
  }

  // fetch the user on submit
  const handleSubmitUser = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(resp => resp.json())
    .then(userData => {
      setData(userData)
    })
  }

  return (
    <>
      <div className="navbar">Github User Finder</div>

      <div className="search">
        <Form onSubmit={handleSubmitUser}>
          <Form.Field onChange={handleSearchUser}>
            <label>Enter User Name</label>
            <input placeholder="User Name" />
          </Form.Field>
          
          <Button type="submit">Search</Button>
        </Form>
      </div>

      <UserCard avatar={avatar} name={name} location={location} userName={userName}/>
    </>
  );
}

export default App;
