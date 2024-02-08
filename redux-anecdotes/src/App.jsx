import { useSelector, useDispatch } from 'react-redux'

import { createStore } from 'redux'
import reducer, { voteAnecdoteOf, createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const store = createStore(reducer)

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value 
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const vote = (id) => {
    dispatch(voteAnecdoteOf(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => 
              vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App