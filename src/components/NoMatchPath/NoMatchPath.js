import './NoMatchPath.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPath = () => (
  <div className='no-match'>
    <h1>404 error - Page not found</h1>
    <Link to='/'>Home</Link>
  </div>
);

export default NoMatchPath; 