import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/breakfast">Breakfast</Link></li>
              <li><Link to="/dinner">Dinner</Link></li>
              <li><Link to="/drinks">Drinks</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
