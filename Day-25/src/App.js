import React, { Component } from 'react';
import './index.css';

class TodoApp extends Component {
  state = {
    todos: [],
    newTodo: {
      taskName: "",
      description: "",
      status: "not completed",
    },
    filterStatus: "all",
  };

  addTodo = () => {
    const { todos, newTodo } = this.state;
    this.setState({
      todos: [...todos, newTodo],
      newTodo: {
        taskName: "",
        description: "",
        status: "not completed",
      },
    });
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  editTodo = (index) => {
    // Implement edit functionality
  };

  toggleStatus = (index) => {
    const { todos } = this.state;
    todos[index].status =
      todos[index].status === "not completed" ? "completed" : "not completed";
    this.setState({ todos });
  };

  handleFilterChange = (event) => {
    this.setState({ filterStatus: event.target.value });
  };

  render() {
    const { todos, newTodo, filterStatus } = this.state;

    const filteredTodos =
      filterStatus === "all"
        ? todos
        : todos.filter((todo) => todo.status === filterStatus);

    return (
      <div className="App">
        <h1 className='todo-na'>   My-todo    </h1>

        <div id="todo-form">
          <input className='todo-in'
            type="text"
            placeholder="Task name"
            value={newTodo.taskName}
            onChange={(e) =>
              this.setState({ newTodo: { ...newTodo, taskName: e.target.value } })
            }
          />
          <input className='todo-in'
            type="text"
            placeholder="Description"
            value={newTodo.description}
            onChange={(e) =>
              this.setState({ newTodo: { ...newTodo, description: e.target.value } })
            }
          />
          <button className='add-btn' onClick={this.addTodo}>Add Task</button>
        </div>

        <div id="filter">

            <div className='filt-todo'>
            <h4> My Todos  </h4>
            </div>
         
            <div className='filt-list'>
            <label> Status Filter: </label>
          <select className='filt-sele' value={filterStatus} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
            </div>
         
        </div>

        <div id="todo-list">
            
            <div className='todo-addlist'>
              
          {filteredTodos.map((todo, index) => (
            <div key={index} className="todo-card">
           
              <h2>   Name:   {todo.taskName}</h2>
              <p>  Description:   {todo.description}</p>

              <label> Status Filter: </label>
              <select className='filt-sele' value={filterStatus} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>

            <div className="all-btn"> 
              <button className='edit-btn' onClick={() => this.editTodo(index)}>Edit</button>
              <button className='del-btn' onClick={() => this.deleteTodo(index)}>Delete</button>

            </div>

            </div>
          ))}
            </div>


        </div>
      </div>
    );
  }
}

export default TodoApp;