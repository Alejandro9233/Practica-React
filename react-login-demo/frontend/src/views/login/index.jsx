import React, { useState } from 'react'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
  return fetch('https://obscure-palm-tree-gjj7g4xqqjw3gjp-8080.app.github.dev/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({ setToken, setEmail }) => {
  const [email, setEmaill] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    setEmail(email);
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmaill(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};