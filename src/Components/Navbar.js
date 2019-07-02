import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import AddRecipe from './AddRecipe'
import AddCategory from './AddCategory'
import '../App.css';

const axios = require('axios');

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
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
              <a href data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <a href data-target="modal1" className="btn-floating modal-trigger btn-large halfway-fab waves-effect waves-light">
                <i className="material-icons">add</i>
              </a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                {this.state.categories.map(category => {
                  return <li key={category.id}><Link to={'/' + category.name}>{category.name}</Link></li>
                })}
              </ul>
              <a href data-target="modal2" className="btn-floating btn-small modal-trigger waves-effect waves-light"><i className="material-icons">add</i></a>
            </div>
          </nav>
        </div>
        <div>
          <ul className="sidenav" id="mobile-demo">
            {this.state.categories.map(category => {
              return <li key={category.id}><Link to={'/' + category.name}>{category.name}</Link></li>
            })}
          </ul>
        </div>
        <AddRecipe id='modal1' />
        <AddCategory id='modal2' />
      </div>
    );
  }
}

export default Navbar;
