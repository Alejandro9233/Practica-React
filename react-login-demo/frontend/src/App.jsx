import { useState } from 'react'
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainLayout from './layouts'
import Login from './views/login'
import User from './views/user'
import './App.css'

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  if(token) {
    return <Login setToken={setToken} setEmail={setEmail} />
  }

  return (
    <MainLayout>
      <User email={email}/>
    </MainLayout>
  )
}

export default App