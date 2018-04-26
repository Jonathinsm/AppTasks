import React, {Component} from 'react';

import { todosRef, manageTaskItems } from '../config/db'

class Navigation extends Component{
  constructor(){
      super();
      this.state = {
        todos:[

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
