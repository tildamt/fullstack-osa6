import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <Filter />
      <Anecdotes />
    </div>
  )
}

export default App