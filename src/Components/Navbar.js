import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css';

class Navbar extends Component {

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
              <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
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
      </div>
    );
  }
}

export default Navbar;
