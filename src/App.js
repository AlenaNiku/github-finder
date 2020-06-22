import React, { useState, useEffect} from 'react';
import './App.css';
import UserCard from './UserCard';
import { Button, Form } from "semantic-ui-react";

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [userInput, setUserInput] = useState('')

  // on the page load show my github card
  useEffect(() => {
    fetch('https://api.github.com/users/alenaniku')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])

  const setData = ({ name, login, avatar_url, location, bio }) => {
    setName(name)
    setUserName(login)
    setAvatar(avatar_url)
    setLocation(location)
    setBio(bio)
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
      <div className="navbar">Github User Search</div>

      <div className="search">
        <Form onSubmit={handleSubmitUser}>
          <Form.Field onChange={handleSearchUser}>
            <label>Enter User Name</label>
            <input placeholder="User Name" />
          </Form.Field>

          <Button color="purple" type="submit">
            Search
          </Button>
        </Form>
      </div>

      <UserCard
        avatar={avatar}
        name={name}
        location={location}
        userName={userName}
        bio={bio}
      />
    </>
  );
}

export default App;
