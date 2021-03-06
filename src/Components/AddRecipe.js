import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'
import { initialize } from './Inititialize'
const axios = require('axios');

class AddRecipe extends Component {
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

  handleTheIStuff = e => {
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
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}recipe/create`, this.state)
      this.resetModal()
      M.toast({
        html: 'Recipe Created!',
        displayLength: 3000,
        inDuration: 300,
        outDuration: 375
      })
    } catch (error) {
      M.toast({
        html: 'Recipe Creation Failed!',
        displayLength: 3000,
        inDuration: 300,
        outDuration: 375
      })
    }
  }

  render() {
    return (
        <div id='modal1' className="modal" ref='formModal'>
        <div className="modal-content">
          <h4 className='modal-header'>Add a new recipe</h4>
            <form id='recipe-form' className="col s12" onSubmit={this.handleSubmit}>
                <div className="row input-field col s12 mt-4">
                  <select name='category_id' onChange={this.handleChange}>
                    <option></option>
                    {this.state.categoriesOptions.map(category => {
                      return <option key={category.id} value={category.id}>{category.name}</option>
                    })}
                  </select>
                  <label>Category</label>
                </div>
                <div className="row input-field col s12">
                  <textarea name='name' onChange={this.handleChange} className="materialize-textarea"></textarea>
                  <label>Name</label>
                </div>
                <div className="row input-field col s12">
                  <textarea name='url' onChange={this.handleChange} className="materialize-textarea"></textarea>
                  <label>URL</label>
                </div>
                <div className="row chips ingredients chips-placeholder input-field col s12">
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

export default AddRecipe;
