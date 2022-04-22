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
    console.log(e.target.value)
    this.setState({ filterBy: e.target.value, isFiltered: true })
    this.props.searchFilterBy(e.target.value, e.target.name)
  }

  render() {
    return(
      <>
      { 
        this.props.selectedFilter === 'house' && (
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
    
              
          </div>
        )
      }
      
      {
        this.props.selectedFilter === 'ancestry' && (
          <div className='filter-dropdown-menu'>
            {/* <label htmlFor='ancestry'>Ancestry</label> */}
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
            {/* <label htmlFor='hogwarts'>Student or Staff</label> */}
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
        {/* <h3 className='current-menu'>{this.state.filterBy}</h3> */}
      </>
    )
  }
}

export default FilterDropDown;