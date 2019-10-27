import React from 'react';
import ritLogo from '../../assets/rit_login_logo.png';
import './SignInHeader.css';

export default function SignInHeader() {
  return (
    <div className="SignInHeader">
      <div className="sign-in-heading">
        <div className="logo-container">
          <a
            href="http://www.rit.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="rit-white"
              src={ritLogo}
              alt=""
              width="auto"
              height="auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
