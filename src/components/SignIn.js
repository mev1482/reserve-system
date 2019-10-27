import React from 'react';
import { Link } from 'react-router-dom';
import SignInHeader from './sign-in/SignInHeader';
import FormField from './sign-in/FormField';
import './SignIn.css';

export default function SignIn({
  username, password, setUsername, setPassword,
}) {
  const handleClick = (e) => {
    if (username.length === 0 || password.length === 0) {
      e.preventDefault();
    }
  };

  return (
    <div className="SignIn">
      <SignInHeader />
      <div className="sign-in-container">
        <h1>RIT Login</h1>
        <form>
          <FormField
            label="RIT Username"
            value={username}
            setValue={setUsername}
          />
          <FormField
            label="Password"
            value={password}
            setValue={setPassword}
            redacted
          />
          <Link className="homeLink" to="/">
            <input type="button" value="Next" onClick={handleClick} />
          </Link>
        </form>
      </div>
    </div>
  );
}
