import React from 'react';

function PlaceHolder() {
  const x = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.`;
  return (
    <div>
      <h1>CONTENT</h1>
      <p>
        {x}
        {x}
        {x}
        {x}
        {x}
        {x}
      </p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="Content">
      <PlaceHolder />
    </div>
  );
}
