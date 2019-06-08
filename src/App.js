import React, { Component } from 'react'
import './App.css'
import Todos from './components/Todos'
class App extends Component {
  state= {
    todos: [
      {
        id: 1,
        title:'tale out the trash',
        completed: false
      },
      {
        id: 2,
        title:'dinner with wife',
        completed: false
      },
      {
        id: 3,
        title:'mow lawn',
        completed: false
      },
    ]
  }
  
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
