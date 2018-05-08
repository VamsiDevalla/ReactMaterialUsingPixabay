import React, { Component } from 'react';
import NavBar from './components/navbar/Navbar'
import Search from './components/search/Search'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
       <MuiThemeProvider>
          <div className="App">
                <NavBar/>
                <Search/>
          </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
