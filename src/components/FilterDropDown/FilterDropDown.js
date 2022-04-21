import { Component } from 'react';
import './FilterDropDown.css'

class FilterDropDown extends Component {
  constructor() {
    super()
    this.state = {
      filterBy: '',
      isFiltered: false
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ filterBy: e.target.value, isFiltered: true })
    this.props.searchFilterBy(e.target.value, e.target.name)
  }

  render() {
    return(
      <div className='filter-dropdown-menu'>
        {/* <label htmlFor='house'>House</label> */}
        <select 
          name='house' 
          value={this.state.filterBy}
          onChange={(e) => this.handleChange(e)}
        >
          <option>Choose a house</option>
          <option value='Gryffindor'>Gryffindor</option>
          <option value='Slytherin'>Slytherin</option>
          <option value='Hufflepuff'>Hufflepuff</option>
          <option value='Ravenclaw'>Ravenclaw</option>
        </select>

        {/* <label htmlFor='ancestry'>Ancestry</label> */}
        <select
          name='ancestry'
          value={this.state.filterBy}
          onChange={(e) => this.handleChange(e)}
        >
          <option>Choose ancestry</option>
          <option value='half-blood'>Half-Blood</option>
          <option value='pure-blood'>Pure-Blood</option>
          <option value='muggleborn'>Muggleborn</option>
          <option value='muggle'>Muggle</option>
          <option value='squib'>Squib</option>
        </select>

        {/* <label htmlFor='hogwarts'>Student or Staff</label> */}
        <select
          name='hogwarts'
          value={this.state.filterBy}
          onChange={(e) => this.handleChange(e)}
        >
          <option>Choose staff or student</option>
          <option value='hogwartsStudent'>Student</option>
          <option value='hogwartsStaff'>Staff</option>
        </select>
      </div>
    )
  }
}

export default FilterDropDown;