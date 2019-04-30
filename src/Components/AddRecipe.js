import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      // ingredients: [],
      // instructions: []
    }
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
    var elems3 = document.querySelectorAll('.chips');
    M.Chips.init(elems3);
    // M.Chips.getInstance('.chips-initial').chipsData();
  }

  handleChange = (e) => {
    // console.log(e.target.key)
    this.setState({[e.target.name]: e.target.value}, () => {
      console.log(this.state);
    })
  }

  handleTheIStuff = e => {
    // var data= `$('#mommy').material_chip('data')`;
    console.log(e);
  }

  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Add a new recipe</h4>
            <form className="col s12">
              <div className='row'>
                <div className="input-field col s12 mt-4">
                  <select>
                    <option value="1">Breakfast</option>
                    <option value="2">Dinner</option>
                    <option value="3">Drinks</option>
                  </select>
                  <label>Category</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea name='name' onChange={this.handleChange} className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea name='url' onChange={this.handleChange} className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">URL</label>
                </div>
              </div>
              <div className="row">
                <div className="chips chips-placeholder input-field col s12" chipsData={this.handleTheIStuff}>
                  <input className='input' name='ingredients' placeholder='Ingredients'></input>
                  {/* <label htmlFor="textarea1">Ingredients</label> */}
                </div>
              </div>
              <div className="row">
                <div className="chips chips-placehodler input-field col s12">
                  <input className="input" placeholder='Instructions'></input>
                  {/* <label htmlFor="textarea1">Instructions</label> */}
                </div>
              </div>
            </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Submit</a>
        </div>
      </div>
    )
  }
}

export default AddRecipe;
