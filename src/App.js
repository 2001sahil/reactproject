import './App.css';
import React, { Component } from 'react'
import News from './News';
import Navbar from './components/Navbar';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        {/* hii */}
      <div className="container mr-5 ">
        <News/>
      </div></div>
    )
  }
}

