import React, {Component} from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import '../App.css'

class Recipe extends Component {

  constructor() {
    super()
    this.state = {
      editable: false,
      editing: false
    }
  }

  handleEdit = () => {
    this.setState({
      editable: !this.state.editable,
      editing: !this.state.editing
    }, () => {
      if (this.state.editing == false) {
        console.log('time to send a put');
        M.toast({html: 'Recipe Updated!', displayLength: 3000, inDuration: 300, outDuration: 375})
      }
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    const {recipe} = this.props;
    return (
    <div className="col s12 m7 recipe-card">
      <div className="card horizontal">
        <div className="card-stacked">
          <a onClick={this.handleEdit} style={{
              'background-color' : this.state.editing
                ? 'black'
                : null
            }} class="btn-floating btn-small halfway-fab waves-effect waves-light edit">
            <i class="material-icons">edit</i>
          </a>
          <div className="card-content">

            <h4 contentEditable={this.state.editable}>{recipe.name}</h4>
            <a className='card-url' href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.url}</a><br/>

            <div className='ingredients-header'>Ingredients</div>
            <div className='ingredients-container col s12 m6 l6'>
              {
                recipe.ingredients.map(ingrd => {
                  return <span onChange={this.handleChange} name='ingredient' key={ingrd.id} contentEditable={this.state.editable} className='ingredient chip'>{ingrd}</span>
                })
              }
            </div>

            <div className='instructions-header'>Instructions</div>
            <div className='instructions-container col s12 m6 l6'>
              {
                recipe.instructions.map(instr => {
                  return <span onChange={this.handleChange} key={instr.id} contentEditable={this.state.editable} className='instruction chip'>{instr}</span>
                })
              }
            </div>

          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Recipe;
