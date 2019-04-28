import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import AddRecipe from './AddRecipe'
import '../App.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      addRecipeToggle: false,
    }
  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <div className='navbar-fixed'>
          <nav>
            <div className="nav-wrapper">
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <a data-target="modal1" className="btn-floating modal-trigger btn-large halfway-fab waves-effect waves-light deep-purple">
                <i className="material-icons">add</i>
              </a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/dinner">Dinner</Link></li>
                <li><Link to="/drinks">Drinks</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/breakfast">Breakfast</Link></li>
            <li><Link to="/dinner">Dinner</Link></li>
            <li><Link to="/drinks">Drinks</Link></li>
          </ul>
        </div>
        <AddRecipe id='modal1' />
      </div>
    );
  }
}

export default Navbar;
