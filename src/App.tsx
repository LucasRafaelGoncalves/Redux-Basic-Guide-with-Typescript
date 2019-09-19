import React from 'react'
import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './actions'

const store = createStore(todoApp)

const App: React.FC = () => {
  return (
    <div className="App">

    </div>
  )
}

export default App
