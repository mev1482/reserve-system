import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ritLogo from '../../assets/rit_logo.png';
import userLogo from '../../assets/user_logo.png';
import './Header.css';

function AccountMenu({ username, signOut }) {
  const [redirect, setRedirect] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    signOut();
    setRedirect(true);
  };
  return (
    <div className="account-menu">
      <span>
        Logged in as:&nbsp;
        {username}
      </span>
      <span>Access: Student</span>
      <button
        id="sign-out-button"
        className="asText"
        onClick={handleClick}
        type="button"
      >
        Sign Out
      </button>
      { redirect
        && <Redirect to="/sign-in" />}
    </div>
  );
}

export default function Header({ username, signOut }) {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="Header">
      <div className="heading">
        <Link to="/">
          <img id="rit" src={ritLogo} alt="" width="auto" height="auto" />
        </Link>
        <div>
          <a
            href="#user"
            onClick={(e) => {
              e.preventDefault();
              setShowAccount(!showAccount);
            }}
          >
            <img
              id="user"
              src={userLogo}
              alt=""
              width="auto"
              height="auto"
            />
          </a>
        </div>
      </div>
      { showAccount
        && <AccountMenu username={username} signOut={signOut} />}
    </div>
  );
}
