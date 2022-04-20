import { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
        <button>Find</button>
      </form>
    )
  }
}

export default Form;