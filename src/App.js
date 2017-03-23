import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {label: 'todo 1'},
        {label: 'todo 2'}
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    if (e.which === 13) {
      const text = e.target.value.trim();
      e.target.value = '';
      this.setState({
        todos: [...this.state.todos, {label: text}]
      });
    }
  }

  handleToggleCompleted(todo) {
    todo.completed = !todo.completed;
    this.forceUpdate();
  }

  handleDelete(todo) {
    this.setState({
      todos: this.state.todos.filter(t => t !== todo)
    });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={this.handleSubmit}/>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <ul className="todo-list">
            {this.state.todos.map((todo, i) => (
              <TodoItem key={i} todo={todo} toggleCompleted={this.handleToggleCompleted} delete={this.handleDelete}/>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong> item left
          </span>
        </footer>
      </section>
    );
  }
}

export default App;
