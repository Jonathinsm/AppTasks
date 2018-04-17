import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Taskform from './components/Taskform';
import Tasks from './components/Tasks';

import {todos} from './todos.json';

class App extends Component {
  constructor(){
      super();
      this.state = {
        todos
      }
      this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <Taskform onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-8 backnotes">
              <Tasks/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
