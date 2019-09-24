import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import todoApp from './reducers'
import { Provider } from 'react-redux'

const store = createStore(todoApp)

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)