import React, { Component } from 'react';
import 'glamor/reset';
import glamorous from 'glamorous';

class App extends Component {
  render() {
    return (
      <MainApp>
        <NavBar>
          <Hamburger/>
        </NavBar>
      </MainApp>
    );
  }
}

let MainApp = glamorous.div({
  backgroundColor: 'red',
  width: '100%',
  height: '100vh'
})

let NavBar = glamorous.header({
  backgroundColor: 'black',
  height: '8vh',
  width: '100%',
  position: 'fixed',
  top: 0,
})

let Hamburger = glamorous.div({
  backgroundColor: 'grey',
  height: '100%',
  width: '50',
  position: 'relative',
  right: 0
})

export default App;
