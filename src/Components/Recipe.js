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
                <a className='card-url' href={recipe.url}>{recipe.url}</a><br/>
                <div className='ingredients-header'>Ingredients</div>
                <div className='ingredients-container col s12 m6 l6'>
                  {recipe.ingredients.map(ingrd => {
                    return <span className='ingredient chip' key={ingrd}>{ingrd}</span>
                  })}
                </div>

                <div className='instructions-header'>Ingredients</div>
                <div className='instructions-container col s12 m6 l6'>
                  {recipe.instructions.map(instr => {
                    return <span className='instruction chip' key={instr}>{instr}</span>
                  })}
                </div>
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
