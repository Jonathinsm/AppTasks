import React, {Component} from 'react';

import { todosRef } from '../config/db'

class Navigation extends Component{
  constructor(){
      super();
      this.state = {
        todos:[

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

  render(){
    return(
      <nav className="navbar navar-dark bg-dark">
        <a href="">
          Tasks
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
        </a>
      </nav>
    )
  }
}

export default Navigation;
