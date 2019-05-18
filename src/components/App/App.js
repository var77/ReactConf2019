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
              <div className="mainCard">
                  <h1 className="headerText">React Conf 2019</h1>
                  <div className="card card-4 card-space">
                      <div className="inputSize">
                          <h3 className="inputText">Regular Input</h3>
                          <div className="checkbox-input">
                              <Input disabled={this.state.inputDisabled} id="first-input" />
                              <Checkbox onCheck={e => this.setState({ inputDisabled: e.target.checked })} checked={this.state.inputDisabled} />
                          </div>
                      </div>
                      <div className="inputSize">
                          <h3 className="inputText">Email Input</h3>
                          <div>
                              <Input id="email-input" email onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
