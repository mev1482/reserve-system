import React from 'react';

export default function Header({account}) {

  return (
    <div className="Header">
      <div>Logo</div>
      <div>Account {account.first} {account.last}</div>
    </div>
  )

}
