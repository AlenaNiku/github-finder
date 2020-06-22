import React, { useState, useEffect} from 'react';
import './App.css';
import { Button, Form } from "semantic-ui-react";
import UserCard from './UserCard';
import NotAUser from './NotAUser'

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [userInput, setUserInput] = useState('')
  const [repos, setRepos] = useState('')
  const [notFound, setNotFound] = useState(null)

  // on the page load show my github card - runs once
  useEffect(() => {
    fetch('https://api.github.com/users/alenaniku')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])

  const setData = ({ name, login, avatar_url, location, bio, public_repos }) => {
    setName(name)
    setUserName(login)
    setAvatar(avatar_url)
    setLocation(location)
    setBio(bio)
    setRepos(public_repos)
  };

  // change the state on search
  const handleSearchUser = (e) => {
    setUserInput([e.target.value])
  }

  // fetch the user on submit, if the user is not found - display message
  const handleSubmitUser = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(resp => resp.json())
    .then(userData => {
      if (userData.message) {
        setNotFound(userData.message)
      } else {
        setData(userData)
      }
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

      {notFound ? (
        <NotAUser />
      ) : (
        <UserCard
          avatar={avatar}
          name={name}
          location={location}
          userName={userName}
          bio={bio}
          repos={repos}
        />
      )}
    </>
  );
}

export default App;
