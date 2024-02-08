import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: reducer,
    filter: filterReducer
  }
})

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