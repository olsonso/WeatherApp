import React, { Component } from 'react';
import Header from './Components/Header/header.js'
import MainContainer from './Components/MainContainer/mainContainer.js'
import './Styles/App.css';

class App extends Component {

  state = { message: "Loading..." };

  // Load some data from the server to demonstrate communication between
  // the client and Node
  async componentDidMount() {
    try {
      const data = await fetch('/example-path');
      const json = await data.json();
      this.setState(json);
    } catch (e) {
      console.log("Failed to fetch message", e);
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <MainContainer/>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
