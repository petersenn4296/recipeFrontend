import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import AddRecipe from './AddRecipe'
import '../App.css';

const axios = require('axios');

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      addRecipeToggle: false,
      categories: []
    }
  }

  async componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}category/all`);
      const categories = response.data
      this.setState({categories: categories})
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <div className='navbar-fixed'>
          <nav>
            <div className="nav-wrapper">
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <a data-target="modal1" className="btn-floating modal-trigger btn-large halfway-fab waves-effect waves-light">
                <i className="material-icons">add</i>
              </a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                {this.state.categories.map(category => {
                  return <li><Link to={'/' + category.name}>{category.name}</Link></li>
                })}
              </ul>
              <a class="btn-floating btn-small waves-effect waves-light"><i class="material-icons">add</i></a>
            </div>
          </nav>
        </div>
        <div>
          <ul className="sidenav" id="mobile-demo">
            {this.state.categories.map(category => {
              return <li><Link to={'/' + category.name}>{category.name}</Link></li>
            })}
            <a class="btn-floating btn-small waves-effect waves-light"><i class="material-icons">add</i></a>
          </ul>
        </div>
        <AddRecipe id='modal1' />
      </div>
    );
  }
}

export default Navbar;
