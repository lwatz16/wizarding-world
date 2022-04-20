import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      currentSearch: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFindBtn = (e) => {
    e.preventDefault()
    const inputCharacter = {...this.state}
    this.props.searchName(inputCharacter);
    this.setState({ currentSearch: {...this.state} })
    this.clearInput()
  }

  handleClearBtn = (e) => {
    e.preventDefault()
    this.props.clearFilter()
    this.clearInput()
    this.clearCurrentSearch()
  }

  clearInput = () => {
    this.setState({ name: '' })
  }

  clearCurrentSearch = () => {
    this.setState({ currentSearch: '' })
  }

  render() {
    return(
      <form className='form'>
        <label className='input-label'>Name:</label>
        <input
          className='filter-search-bar'
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Hermoine'
          onChange={(e) => this.handleChange(e)}
        >
        </input>
        <button
          className='find-btn'
          onClick={(e) => this.handleFindBtn(e)}
          disabled={this.state.name.length ? false : true}
          >Find
        </button>
        <button
          className='clear-btn'
          onClick={(e) => this.handleClearBtn(e)}
          >Clear
        </button>
        {this.state.currentSearch && <p className='search-results'>Results for: {this.state.currentSearch.name}</p>}
      </form>
    )
  }
}

export default Form;