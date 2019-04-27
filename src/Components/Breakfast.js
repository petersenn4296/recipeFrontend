import React, { Component, Fragment } from 'react'
import Recipe from './Recipe';
import '../App.css'

class Breakfast extends Component {
  render() {
    return(
      <div className='container-fluid recipe-container'>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />

      </div>
    )
  }
}

export default Breakfast;
