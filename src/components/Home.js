import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <Link className="reserveLink" to="/reserve">
        <input type="button" value="Reserve" />
      </Link>
    </div>
  );
}
