import './NoMatchPath.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPath = () => (
  <div className='no-match'
    style={{
      backgroundImage: 'url(/platform9-unsplash.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className='no-match-error'>
      <h1>404 error</h1>
      <h2>Page not found</h2>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  </div>
);

export default NoMatchPath; 