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
      <div>
        <label htmlFor='house'>House</label>
        <select 
          name='house' 
          value={this.state.filterBy}
          onChange={(e) => this.handleChange(e)}
        >
          {/* <option>All</option> */}
          <option value='Gryffindor'>Gryffindor</option>
          <option value='Slytherin'>Slytherin</option>
          <option value='Hufflepuff'>Hufflepuff</option>
          <option value='Ravenclaw'>Ravenclaw</option>
        </select>

        <label htmlFor='ancestry'>Ancestry</label>
        <select
          name='ancestry'
          value={this.state.filterBy}
          onChange={(e) => this.handleChange(e)}
        >
          <option value='half-blood'>Half-Blood</option>
          <option value='pure-blood'>Pure-Blood</option>
          <option value='muggleborn'>Muggleborn</option>
        </select>

      </div>
    )
  }
}

export default FilterDropDown;