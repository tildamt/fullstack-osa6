import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import reducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

import anecdoteService from './services/anecdotes'

import store from './store'

/*anecdoteService.getAll().then(anecdotes => 
  store.dispatch(setAnecdotes(anecdotes)))*/

console.log(store.getState())
/*const combinedReducer = combineReducers({
  anecdotes: reducer,
  filter: filterReducer
})

const store = createStore(combinedReducer)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)