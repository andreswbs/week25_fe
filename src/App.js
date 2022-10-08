import './App.css';

import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Users from './pages/Users'

import {validateUser, getRegisteredUsers} from './controllers/api_operations.js'

function App() {
  const [data, setData] = useState({
    users: [],
    token: null
  })
  const login = async (username, password) => {
    const token = await validateUser(username, password)
    setData((prev) => ({...prev, token: token}))
  }

  const getUsers = async (token) => {
    if (!token) {
      console.log('token not ready yet')
      return []
    }
    console.log('token ready, will get users')
    const users = await getRegisteredUsers(token)
    if (!users) {
      return
    }
    setData((prev) => {
      const newState = { ...prev, users}
      console.log('newState', newState)
      return newState
    })
  }

  return (
    <Router>
        <Routes>
            <Route path="/login" element={
              <Login login={login} />
            } />
            <Route path="/registered_users" element={
              <Users getUsers={getUsers} users={data.users} token={data.token}  />
            } />
        </Routes>
    </Router>
    
  );
}

export default App;
