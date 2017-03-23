import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange() {
    this.props.toggleCompleted(this.props.todo);
  }

  handleDelete() {
    this.props.delete(this.props.todo);
  }

  render() {
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.handleChange}/>
          <label>{this.props.todo.label}</label>
          <button className="destroy" onClick={this.handleDelete}/>
        </div>
      </li>
    );
  }
}

export default TodoItem;
