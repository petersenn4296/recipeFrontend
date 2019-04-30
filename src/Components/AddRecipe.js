import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'
const axios = require('axios');

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      instructions: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, options);
    var elems2 = document.querySelectorAll('select');
    M.FormSelect.init(elems2);
    var elems4 = document.querySelectorAll('.chips');
    M.Chips.init(elems4, {
        onChipAdd: this.handleTheIStuff,
        onChipDelete: this.handleTheIStuff,
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

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    // try {
    //   const response = await axios.post('http://the-recipes-backend.herokuapp.com/recipe/create', this.state);
    //   console.log(response)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4 className='modal-header'>Add a new recipe</h4>
            <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row input-field col s12 mt-4">
                  <select name='category' onChange={this.handleChange}>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="drinks">Drinks</option>
                  </select>
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
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
            </form>
        </div>

      </div>
    )
  }
}

export default AddRecipe;
