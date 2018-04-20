import React, {Component} from 'react';

import { todosRef } from '../config/db'

class Tasks extends Component{
  constructor(){
      super();
      this.state = {
        todos: [

        ]
      }
  }

  componentDidMount(){
    const { todos } = this.state;

    todosRef.on('child_added', snap => {
      todos.push({
        todoid: snap.key,
        title: snap.val().title,
        responsible: snap.val().responsible,
        description: snap.val().description,
        estado: snap.val().estado,
        priority: snap.val().priority
      })
      this.setState({todos});
    })

    todosRef.on('child_removed', snap => {
      let todo = {
        todoid: snap.key,
        title: snap.val().title,
        responsible: snap.val().responsible,
        description: snap.val().description,
        priority: snap.val().priority
      };

      let todos = this.state.todos.filter((i)=> todo.todoid !== i.todoid)
      this.setState({todos})
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
          this.state.todos.map((todo,i)=>{
            return(
              <div className="col-md-4" key={todo.todoid}>
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
                      onClick={this.removeTodo.bind(this, todo.todoid)}
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
