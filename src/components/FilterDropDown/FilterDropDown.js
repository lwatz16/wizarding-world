import { Component } from 'react';
import './FilterDropDown.css'

class FilterDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterBy: '',
      isFiltered: false
    }
  }

  handleChange = (e) => {
    this.setState({ filterBy: e.target.value, isFiltered: true })
    this.props.searchFilterBy(e.target.value, e.target.name)
  }

  render() {
    return(
      <>
      { 
        this.props.selectedFilter === 'house' && (
          <div className='filter-dropdown-menu'>
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
    
              
          </div>
        )
      }
      
      {
        this.props.selectedFilter === 'ancestry' && (
          <div className='filter-dropdown-menu'>
            <select
              name='ancestry'
              value={this.state.filterBy}
              onChange={(e) => this.handleChange(e)}
            >
              <option>Choose ancestry</option>
              <option value='Half-Blood'>Half-Blood</option>
              <option value='Pure-Blood'>Pure-Blood</option>
              <option value='Muggleborn'>Muggleborn</option>
              <option value='Muggle'>Muggle</option>
              <option value='Squib'>Squib</option>
            </select>
          </div>
        )
      }

      {
        this.props.selectedFilter === 'hogwarts' && (
          <div className='filter-dropdown-menu'>
            <select
              name='hogwarts'
              value={this.state.filterBy}
              onChange={(e) => this.handleChange(e)}
            >
              <option>Choose staff or student</option>
              <option value='hogwartsStudent'>Hogwarts Student</option>
              <option value='hogwartsStaff'>Hogwarts Staff</option>
            </select>
          </div>
        )
      }
      </>
    )
  }
}

export default FilterDropDown;