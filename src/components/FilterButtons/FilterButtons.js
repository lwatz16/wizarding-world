import React from "react";
import './FilterButtons.css'

const FilterButtons = ({ toggleFilter }) => {

  const handleClick = (e) => {
    toggleFilter(e.target.name)
  }

  return(
    <div className='filter-btn-container'>
      <button className="filter-btn" name='house' onClick={(e) => handleClick(e)}>House</button>
      <button className="filter-btn" name='ancestry' onClick={(e) => handleClick(e)}>Ancestry</button>
      <button className="filter-btn" name='hogwarts' onClick={(e) => handleClick(e)}>Student or Staff</button>
      <button className="filter-btn" name='name' onClick={(e) => handleClick(e)}>Name</button>
    </div>
  )
}

export default FilterButtons;