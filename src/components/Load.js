import React, { Component } from 'react'
import logo from "./VAyR.gif"
import "../App.css"

export default class Load extends Component {
  render() {
    return (
      <div className='load d-flex justify-content-center align-items-center'>
        <img src={logo} alt=""/>
      </div>
    )
  }
}
