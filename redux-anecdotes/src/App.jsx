import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  
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