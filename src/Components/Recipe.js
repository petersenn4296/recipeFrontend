import React, {Component} from 'react'

class Recipe extends Component {
  render() {
    return (
      <div className="col s12 m7 recipe-card">
        <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h4>Name</h4>
                <a>Url</a>
                <p className='recipe-ingrd'>Ingredients</p>
                <p className='recpie-inst'>Instructions</p>
              </div>
              <div className="card-action">
                <a href="#">Edit Recipe? Or something else</a>
              </div>
            </div>
          </div>
      </div>
      );
  }
}

export default Recipe;
