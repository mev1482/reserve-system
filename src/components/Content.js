import React, { useState } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import SignIn from './SignIn';
//import Reserve from './Reserve';


export default function Content() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Content">
      <Header />
      <SignIn
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <Footer />
    </div>
  );
}
