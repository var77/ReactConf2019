import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { inputDisabled: false, text: '' };
  }
  render () {
      return (
          <div className="App">
              <h1>React Tests</h1>
              <Input disabled={this.state.inputDisabled} />
              <Checkbox onCheck={e => this.setState({ inputDisabled: e.target.checked })} checked={this.state.inputDisabled} u/>
          </div>
      );
  }
}

export default App;
