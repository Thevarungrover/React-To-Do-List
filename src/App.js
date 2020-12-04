import React , { Component } from 'react'
import Todos from './Components/Todos'
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
        completed:true
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

  render() {

    return (
        <div className="App">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo}/>
      </div>
    )
  }
}


export default App