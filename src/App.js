import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, } from 'react-router-dom'
import Category from './Components/Category'

const axios = require('axios');


class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}category/all`);
      const categories = response.data
      this.setState({categories: categories})
    } catch (error) {
      console.log('meh', error);
    }
  }

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
              {this.state.categories.map(category => {
              return(
                <Route 
                path={'/' + category.name} 
                render={() => <Category category={category.id} />}
                />
              )
            })}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
