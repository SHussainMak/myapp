import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

class App extends Component {
  render() {
    return (
        <div>
          <Header> </Header>
            <Body> </Body>
          <Footer> </Footer>
        </div>
    );
  }
}

export default App;
