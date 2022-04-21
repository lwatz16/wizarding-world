import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = (props) => {
  console.log('props in dets', props)
  return(
    <main className='details-page'>
      <header className='.details-header'>
        <h1 className='.details-heading'>Wizarding World</h1>   
      </header>

      <Link to={'/'}>
        <button className='.back-btn'>Back</button>
      </Link>

    </main>
  )
}

export default Details;