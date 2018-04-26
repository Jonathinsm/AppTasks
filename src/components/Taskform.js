import React, {Component} from 'react';

import { todosRef } from '../config/db'

class Taskform extends Component{
  constructor(){
    super();
    this.state = {

    }
    this.saveTask = this.saveTask.bind(this);
  }

saveTask(e){
  e.preventDefault();
  todosRef.push().set({
    title: this.title.value,
    responsible: this.responsible.value,
    description: this.description.value,
    priority: this.priority.value
  })

  this.title.value='';
  this.responsible.value='';
  this.description.value='';
}

  render(){
    return(
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              ref={input => {this.title = input;}}
              className="form-control"
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={input => {this.responsible = input;}}
              className="form-control"
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={input => {this.description = input;}}
              className="form-control"
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                ref={input => {this.priority = input;}}
                className="form-control"
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button
            onClick={this.saveTask}
            className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Taskform;
