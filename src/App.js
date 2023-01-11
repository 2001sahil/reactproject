import './App.css';
import React, { Component } from 'react'
import News from './News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <div className="container mr-5 ">
      <Routes>
        <Route  path="/News" element={<News key="News" category="News" />}/>

          <Route  path="/" element={<News key="general" category="general" />} />
          <Route  path="/Entertainment" element={<News key="Entertainment" category="Entertainment" />} />
          <Route  path="/Business" element={<News  key="Business" category="Business" />} />
          <Route  path="/science" element={<News  key="science" category="science" />} />
        {/* </Route> */}
      </Routes>
      </div></div>
    </BrowserRouter>
      // <div>
      //   <Navbar/>
      // <div className="container mr-5 ">
      //   <News category="business" />
      // </div></div>
    )
  }
}

