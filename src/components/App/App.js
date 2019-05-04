import React, { Component } from 'react';
import './App.css';

import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';


const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { inputDisabled: false, text: '', email: '' };
  }
  render () {
      return (
          <div className="App" style={flexCenter}>
              <div style={{ width: 500, height: 500, background: '#e2e2e2', display: 'flex', flexDirection: 'column' }}>
                  <h1>React Conf 2019</h1>
                  <div>
                      <h3>Regular Input</h3>
                      <Input disabled={this.state.inputDisabled} id="first-input" />
                      <Checkbox onCheck={e => this.setState({ inputDisabled: e.target.checked })} checked={this.state.inputDisabled} />
                  </div>
                  <div>
                      <h3>Email Input</h3>
                      <Input id="email-input" email onChange={e => this.setState({ email: e.target.value })} value={this.state.email}/>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
