import React, { useState } from 'react';
import ritLogo from '../../assets/rit_logo.png';
import userLogo from '../../assets/user_logo.png';
import './Header.css';

function AccountMenu({ account }) {
  return (
    <div className="account-menu">
      <span>
        Logged in as:&nbsp;
        {account.first}
        &nbsp;
        {account.last}
      </span>
      <span>
        Access:&nbsp;
        {account.access}
      </span>
    </div>
  );
}

// Fake account for now; replace upon sign-in
const account = {
  first: 'Mike',
  last: 'K',
  access: 'Student',
};

export default function Header(/* {account}*/) {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="Header">
      <div className="heading">
        <a
          href="http://www.rit.edu" target="_blank"
          rel="noopener noreferrer"
        >
          <img id="rit" src={ritLogo} alt="" width="auto" height="auto" />
        </a>
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
        && <AccountMenu account={account} />}
    </div>
  );
}
