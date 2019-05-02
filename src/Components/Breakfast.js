import React, { Component } from 'react'
import Recipe from './Recipe';
import '../App.css'
const axios = require('axios');


class Breakfast extends Component {
  constructor(){
    super();
    this.state = {
      recipes: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}recipe/category/1`);
      const recipes = response.data
      this.setState({recipes: recipes})
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { recipes } = this.state;
    return(
      <div className='container-fluid recipe-container'>
        {recipes.length > 0 ?
          recipes.map(recipe => {
            return <Recipe key={recipe.id} recipe={recipe}/>
          })
        : null}
      </div>
    )
  }
}

export default Breakfast;
