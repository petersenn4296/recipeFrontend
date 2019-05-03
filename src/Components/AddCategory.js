import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'
const axios = require('axios');

class AddCategory extends Component {
  constructor(){
    super();
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
          inDuration: 250,
          outDuration: 250,
          opacity: 0.5,
          dismissible: false,
          startingTop: "4%",
          endingTop: "10%"
        });
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value}, () => {
        console.log(this.state)
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}category/create`, this.state)
      this.resetModal()
      M.toast({
        html: 'Category Created!',
        displayLength: 3000,
        inDuration: 300,
        outDuration: 375
      })
    } catch (error) {
      M.toast({
        html: 'Category Creation Failed!',
        displayLength: 3000,
        inDuration: 300,
        outDuration: 375
      })
    }
  }

  resetModal = () => {
    document.getElementById("category-form").reset();
  }

  render() {
    return(
      <div className='modal' id='modal2'>
        <div className="modal-content">
          <h4 className='modal-header'>Add a new category</h4>
            <form id='category-form' className="col s12" onSubmit={this.handleSubmit}>
                <div className="row input-field col s12">
                  <textarea name='name' onChange={this.handleChange} className="materialize-textarea"></textarea>
                  <label>Name</label>
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

export default AddCategory;