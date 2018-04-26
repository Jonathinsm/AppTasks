import React, {Component} from 'react';

import { todosRef, manageTaskItems } from '../config/db'

class Tasks extends Component{
  constructor(){
      super();
      this.state = {
        todos: [
        ]
      }
  }

  componentDidMount(){
    todosRef.on('value', snap => this.manageItemsList(snap));
  }

  manageItemsList(snapshot){
    this.setState({
      todos:manageTaskItems(snapshot)
    })
  }

  updateTodo(){

  }

  removeTodo(index){
    if (window.confirm('¿Estas seguro de eliminar?')){
      todosRef.child(index).remove();
    }

  }

  render(){
    return(
      <div className="row">
        {
          this.state.todos.map((todo, index)=>{
            return(
              <div className="col-md-4" key={index}>
                <div className="card m-2">
                  <div className="card-title text-center">
                    <h3>{todo.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {todo.priority}
                    </span>
                  </div>
                  <div className="card-body">
                    <p>{todo.description}</p>
                    <p><mark>{todo.responsible}</mark></p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger"
                      onClick={this.removeTodo.bind(this, todo.id)}
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
