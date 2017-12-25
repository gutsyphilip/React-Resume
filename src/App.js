import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper" >
            <Sidebar/>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;   
