import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, } from 'react-router-dom'
import Breakfast from './Components/Breakfast'
import Dinner  from './Components/Dinner'
import Drinks from './Components/Drinks'


class App extends Component {
render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={() =>
              <div>
                Home Component
              </div>}/>
              <Route path="/breakfast" component={Breakfast}/>
              <Route path="/dinner" component={Dinner}/>
              <Route path="/drinks" component={Drinks}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
