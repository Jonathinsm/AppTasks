import React, {Component} from 'react';

import {todos} from '../todos.json';

class Tasks extends Component{
  constructor(){
      super();
      this.state = {
        todos
      }
  }

  removeTodo(index){
    if (window.confirm('Estas seguro de eliminar?')){
      this.setState({
        todos: this.state.todos.filter((e, i)=>{
          return i !== index
        })
      })
    }
  }

  render(){
    return(
      <div className="row">
        {
          this.state.todos.map((todo,i)=>{
            return(
              <div className="col-md-4" key={i}>
                <div className="card m-2">
                  <div className="card-title text-center">
                    <h3>{todo.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {todo.priority}
                    </span>
                  </div>
                  <div className="card-body">
                    {todo.description}
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger"
                      onClick={this.removeTodo.bind(this, i)}
                      >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tasks;
