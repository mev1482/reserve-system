import React, { useState } from 'react';
import FormField from './sign-in/FormField';
import './SignIn.css';

export default function SignIn({username, password, setUsername, setPassword}) {
  return (
    <div className="SignIn">
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
          redacted={true}
        />
        <input type="button" value="Next" onClick={(e) => console.log(e)} />
      </form>
    </div>
  );
}
