import React from 'react';

import './input.styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.setNumberOfCards(this.state.inputValue);
  }

  render() {
    const { inputValue } = this.state;

    return(
      <div className='pair-input'>
        <h2>Number of pairs?</h2>
        <form onSubmit={this.handleSubmit} className='form'>
          <input className='input' type='number' value={inputValue} onChange={this.handleChange}/>
          <button type='submit' className='button'>submit</button>
        </form>
      </div>
    )
  }
}

export default Input;