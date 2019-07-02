import React, {Component} from 'react'
import EditRecipe from './EditRecipe'
import '../App.css'

class Recipe extends Component {

  constructor() {
    super()
    this.state = {
      editable: false,
      editing: false
    }
  }

  handleEdit = recipe => {
    this.setState({editing: true, recipe})
  }

  render() {
    const {recipe} = this.props;
    return (
    <div className="col s12 m7 recipe-card">
      <div className="card horizontal">
        <div className="card-stacked">
          <a href onClick={this.handleEdit.bind(this, recipe)} data-target="modal3" className="btn-floating modal-trigger btn-small halfway-fab waves-effect waves-light edit modal-trigger" style={{
              'backgroundColor' : this.state.editing
                ? 'black'
                : null
            }}>
            <i className="material-icons">edit</i>
          </a>
          <div className="card-content">

            <h4 contentEditable={this.state.editable}>{recipe.name}</h4>
            <a className='card-url' href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.url}</a><br/>

            <div className='ingredients-header'>Ingredients</div>
            <div className='ingredients-container col s12 m6 l6'>
              {recipe.ingredients.map(ingrd => {
                  return <span key={ingrd.id} name='ingredient' contentEditable={this.state.editable} className='ingredient chip'>{ingrd}</span>
                })}
            </div>

            <div className='instructions-header'>Instructions</div>
            <div className='instructions-container col s12 m6 l6'>
            <ul>
              {recipe.instructions.map(instr => {
                return <li key={instr.id} contentEditable={this.state.editable} className='instruction chip'>{instr}</li>
                })}
            </ul>
            </div>

          </div>
        </div>
      </div>
      <EditRecipe id="modal3" recipe={this.state.editing ? this.state.recipe : null} />
    </div>
    );
  }
}

export default Recipe;
