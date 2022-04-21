import React from 'react';
import './Header.css'

const Header = () => {
  return(
    <header
      style={{
        backgroundImage: "url(/hogwarts-aditya-vyas-unsplash.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className='logo-title'>Wizarding World</h1> 
    </header>
  )
}

export default Header;