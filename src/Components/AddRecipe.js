import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {

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
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <label>Recipe Category</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Recipe Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Recipe URL</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Recipe Ingredients</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Recipe Instructions</label>
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
