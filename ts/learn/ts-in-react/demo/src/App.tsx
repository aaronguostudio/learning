import * as React from 'react';
import './App.css';
import Hello from './components/Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello name="Aaron" enthusiasmLevel={8} />
        <Hello name="Bob" enthusiasmLevel={2} />
      </div>
    );
  }
}

export default App;
