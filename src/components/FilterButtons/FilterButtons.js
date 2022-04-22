import { Component } from "react";
import './FilterButtons.css'

class FilterButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleClick = (e) => {
    console.log('clicked on button>>>', e.target.name)
    this.props.toggleFilter(e.target.name)
  }

  render() {
    return(
      <div className='filter-btn-container'>
        <button name='house' onClick={(e) => this.handleClick(e)}>House</button>
        <button name='ancestry' onClick={(e) => this.handleClick(e)}>Ancestry</button>
        <button name='hogwartsStaff/Student' onClick={(e) => this.handleClick(e)}>Student/Staff</button>
        <button name='name' onClick={(e) => this.handleClick(e)}>Name</button>
      </div>
    )
  }
}

export default FilterButtons;