import React, { useState, useEffect} from 'react';
import './App.css';
import UserCard from './UserCard';
import { Button, Form } from "semantic-ui-react";

function App() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userInput, setUserInpu] = useState('')


  return (
    <>
      <div className="navbar">Search Github User</div>

      <div className="search">
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          
          <Button type="submit">Search</Button>
        </Form>
      </div>

      <UserCard />
    </>
  );
}

export default App;
