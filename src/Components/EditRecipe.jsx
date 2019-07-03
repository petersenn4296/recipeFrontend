import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'
import { initialize } from './Inititialize'
const axios = require('axios');

class EditRecipe extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      instructions: [],
      categoriesOptions: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}category/all`);
      const categories = response.data
      this.setState({categoriesOptions: categories})
    } catch (error) {
      console.log(error);
    }
    initialize('.modal')
    initialize('select')
    var elems4 = document.querySelectorAll('.chips');
    M.Chips.init(elems4, {
        onChipAdd: this.handleTheIStuff,
        Limit: 10,
        minLength: 1
    });
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  static handleTheIStuff(e) {
    const chipsArray = e[0].M_Chips.chipsData
    const chip = chipsArray[chipsArray.length - 1].tag
    let joined;

    if (e[0].className.includes('ingredients')) {
      joined = this.state.ingredients.concat(chip)
      this.setState({ ingredients: joined })
    } else {
      joined = this.state.instructions.concat(chip)
      this.setState({ instructions: joined })
    }
  }

  resetModal = () => {
    var elems4 = document.querySelectorAll('.chips');
    M.Chips.init(elems4, {
        onChipAdd: this.handleTheIStuff,
        Limit: 10,
        minLength: 1
    });
    document.getElementById("recipe-form").reset();
  }

  async handleSubmit() {
      console.log('submit')
    // try {
    //   await axios.post(`${process.env.REACT_APP_API_URL}recipe/create`, this.state)
    //   this.resetModal()
    //   M.toast({
    //     html: 'Recipe Created!',
    //     displayLength: 3000,
    //     inDuration: 300,
    //     outDuration: 375
    //   })
    // } catch (error) {
    //   M.toast({
    //     html: 'Recipe Creation Failed!',
    //     displayLength: 3000,
    //     inDuration: 300,
    //     outDuration: 375
    //   })
    // }
  }


  render() {
      const { recipe } = this.props
      console.log(recipe ? this.state.categoriesOptions[recipe.category_id - 1].name : '')
    return (
        <div id='modal3' className="modal" ref='formModal'>
        <div className="modal-content">
          <h4 className='modal-header'>Edit Recipe</h4>
            <form id='recipe-form' className="col s12" onSubmit={this.handleSubmit}>
                <div className="row input-field col s12 mt-4">
                  <select name='category_id'>
                    <option></option>
                    {this.state.categoriesOptions.map(category => {
                      return <option key={category.id} value={category.id}>{category.name}</option>
                    })}
                  </select>
                  <label>Category</label>
                </div>
                <div className="row col s12">
                  <label>Name</label>
                  <textarea name='name' value={recipe ? recipe.name : ''} onChange={this.handleChange} className="materialize-textarea"></textarea>
                </div>
                <div className="row col s12">
                  <label>URL</label>
                  <textarea name='url' value={recipe ? recipe.url : ''} onChange={this.handleChange} className="materialize-textarea"></textarea>
                </div>
                <div className="row chips chips-initial ingredients chips-placeholder input-field col s12">
                  <input className='input' placeholder='Ingredients'></input>
                </div>
                <div className="row chips chips-placehodler input-field col s12">
                  <input className="input" placeholder='Instructions'></input>
                </div>
                <button className="btn waves-effect waves-light modal-close" data-target="#modal1" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
      </div>
    )
  }
}

export default EditRecipe;