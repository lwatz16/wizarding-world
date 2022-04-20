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
    this.props.filterByHouse(e.target.value)
  }

  render() {
    return(
      <div>
        <label htmlFor='filter'>House</label>
          <select 
            name='filter' 
            value={this.state.filterBy}
            onChange={(e) => this.handleChange(e)}
          >
            {/* <option value=''>All</option> */}
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Slytherin'>Slytherin</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
          </select>

      </div>
    )
  }
}

export default FilterDropDown;