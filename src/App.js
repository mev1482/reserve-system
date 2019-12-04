import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Reserve from './components/Reserve';
import Confirm from './components/Confirm';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signOut = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage
              username={username}
              signOut={signOut}
            />
          </Route>
          <Route path="/sign-in">
            <SignInPage
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          </Route>
          <Route path="/reserve" render={(props) =>
            <ReservePage
              username={username}
              signOut={signOut}
              location={props.location}
            />
          }>
          </Route>
          <Route path="/confirm" render={(props) =>
            <ConfirmPage
              username={username}
              signOut={signOut}
              location={props.location.state}
            />}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function SignInPage({
  username, password, setUsername, setPassword,
}) {
  return (
    <>
      <SignIn
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </>
  );
}

function HomePage({ username, signOut }) {
  return (
    <>
      { username === ''
        && <Redirect to="/sign-in" />}
      <Header
        username={username}
        signOut={signOut}
      />
      <Home />
      <Footer />
    </>
  );
}

function ReservePage({ username, signOut, location }) {
  return (
    <>
      { username === ''
        && <Redirect to="/sign-in" />}
      <Header
        username={username}
        signOut={signOut}
      />
      <Reserve
        location={location}
        username={username}
      />
      <Footer />
    </>
  );
}

function ConfirmPage({ username, signOut, location }) {
  return (
    <>
      <Header
        username={username}
        signOut={signOut}
      />
      <Confirm username={username} passedProps={location.reservationInformation}/>
      <Footer />
    </>
  )
}
