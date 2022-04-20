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

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state)
    const inputCharacter = {...this.state}
    this.props.searchName(inputCharacter);
    this.setState({ currentSearch: this.state.name })

    this.clearInput()
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
        <button onClick={(e) => this.handleClick(e)}>Find</button>
        
        {this.state.currentSearch && <p>Results for: {this.state.currentSearch}</p>}
      </form>
    )
  }
}

export default Form;