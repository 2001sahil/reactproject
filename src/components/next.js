import React, { Component } from 'react'

export default class Next extends Component {

  render() {
    let {prev,next}=this.props
    return (
      <div className='d-flex align-items-center justify-content-between mb-5'>
        <button type="button" className="btn btn-primary" onClick={prev}>Previous</button>
        <button type="button" className="btn btn-primary" onClick={next}>Next</button>
      </div>
    )
  }
}
