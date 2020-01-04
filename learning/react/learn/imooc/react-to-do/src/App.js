import React, { Component } from 'react';
import './App.css';

import List from './components/List'
import FriendStatus from './components/FriendStatus'

class App extends Component {
  render() {
    return (
      <div style={{padding: 50}}>
        <List />
        <FriendStatus friendName="Aaron" />
      </div>
    );
  }
}

export default App;
