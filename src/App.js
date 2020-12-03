import React , { Component } from 'react'
import Todos from './Components/Todos'
import './App.css'

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


  render() {

    return (
        <div className="App">
          <Todos todos={this.state.todos}/>
      </div>
    )
  }
}


export default App