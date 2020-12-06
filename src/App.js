import React , { Component } from 'react'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import './App.css'
import Header from './Components/layout/Header'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Make Excel Sheet',
        completed:false
      },
      {
        id: 2,
        title: 'Submit the task',
        completed:false
      },
      {
        id: 3,
        title: 'Create New repo',
        completed:false
      }
    ]
  }
   
  //  toogle complete
  markComplete = (id) =>{
    this.setState( 
      { 
        todos: 
         this.state.todos.map(todo => {
         if(todo.id === id) {
          todo.completed = !todo.completed
          }
        return todo
        })
      }
    )
  }

  // Delete todo
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id) ] } )
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1 ,
      // '.length' is used to calculate length of array 'todos'
      title : title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {

    return (
        <div className="App">
          <div class="container">
          {/* header */}
          <Header />
          {/* adding new todo  */}
          <AddTodo addTodo={this.addTodo} />
          {/* listing todo */}
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo}/>
          </div>
      </div>
    )
  }
}


export default App