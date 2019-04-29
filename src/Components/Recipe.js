import React, {Component} from 'react'
import '../App.css'

class Recipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="col s12 m7 recipe-card">
        <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h4>{recipe.name}</h4>
                <a className='card-url' href={recipe.url}>{recipe.url}</a>
                {recipe.ingredients.map(ingrd => {
                  return <p key={ingrd}>{ingrd}</p>
                })}
                {recipe.instructions.map(instr => {
                  return <p key={instr}>{instr}</p>
                })}
              </div>
              {/* <div className="card-action">
                <a href="#">Edit Recipe? Or something else</a>
                <p>Edit</p>
              </div> */}
            </div>
          </div>
      </div>
      );
  }
}

export default Recipe;
