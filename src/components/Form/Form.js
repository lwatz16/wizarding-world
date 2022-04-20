import { Component } from 'react';

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

  handleNewSearchBtn = (e) => {
    e.preventDefault()
    console.log('here')
    
    this.setState({ name: '', currentSearch: '' })
  }

  clearInput = () => {
    this.setState({ name: '' })
  }

  render() {
    return(
      <form>
        <label>Name:</label>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Hermoine'
          onChange={(e) => this.handleChange(e)}
        >
        </input>
        <button onClick={(e) => this.handleFindBtn(e)}>Find</button>
        <button onClick={(e) => this.handleNewSearchBtn(e)}>New Search</button>
        {this.state.currentSearch && <p>Results for: {this.state.currentSearch.name}</p>}
      </form>
    )
  }
}

export default Form;