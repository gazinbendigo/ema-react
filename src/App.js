import React, { Component } from 'react';  //import module Component from react React will be the default name
import PublicNav from './nav/public/publicNav';
import HubLogs from "./hublogs/hubLogs";

class App extends Component {
  render() {
    return (
      <div className="App">
          <PublicNav />
      </div>
    );
  }
}

export default App;
