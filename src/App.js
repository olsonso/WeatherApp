import React, { Component } from 'react';
import Header from './Components/header.js'
import MainContainer from './Components/mainContainer.js';
import styled from "styled-components";
import media from "styled-media-query";
import './Styles/App.css';

const AppWrapper = styled.div`
  text-align: center;
  margin:10px;
  width:100%;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
  `}
`;

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
      <AppWrapper>
        <Header/>
        <MainContainer/>
        <p>
          {this.state.message}
        </p>
      </AppWrapper>
    );
  }
}

export default App;
