import React, { useState, useEffect} from 'react';
import './App.css';
import { Button, Form } from "semantic-ui-react";
import UserCard from './UserCard';
import oops from "./oops.jpg";

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [userInput, setUserInput] = useState('')
  const [repos, setRepos] = useState('')
  const [blog, setBlog] = useState('')
  const [followers, setFollowers] = useState('')
  const [html_url, setUrl] = useState('') 
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

  const setData = ({ name, login, avatar_url, location, bio, public_repos, blog, html_url, followers }) => {
    setName(name)
    setUserName(login)
    setAvatar(avatar_url)
    setLocation(location)
    setBio(bio)
    setRepos(public_repos)
    setBlog(blog)
    setUrl(html_url)
    setFollowers(followers)
  };

  // change the state on search
  const handleSearchUser = (e) => {
    setUserInput([e.target.value])
  }

  // fetch the user on submit, if the user is not found - display message. Reset the setNotFound state to clear the state and be able to go back to the search
  const handleSubmitUser = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(resp => resp.json())
    .then(userData => {
      if (userData.message) {
        setNotFound(userData.message)
      } else {
        setData(userData)
        setNotFound(null)
      }
    })
  }

  return (
    <>
      <div className="navbar">Github User Search</div>
      <div className="search">
        <Form onSubmit={handleSubmitUser}>
          <Form.Group>
          <Form.Input onChange={handleSearchUser}>
            <input placeholder="Enter User Name" />
          </Form.Input>
          <Button color="purple" type="submit">
            Search
          </Button>
          </Form.Group>
        </Form>
      </div>

      {notFound ? (
        <div className="notfound">
          <img src={oops} alt="not found page"></img>
        </div>
      ) : (
        <UserCard
          avatar={avatar}
          name={name}
          location={location}
          userName={userName}
          bio={bio}
          repos={repos}
          blog={blog}
          url={html_url}
          followers={followers}
        />
      )}
    </>
  );
}

export default App;
