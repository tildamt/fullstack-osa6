import { useDispatch, useSelector} from 'react-redux'
import { voteAnecdoteOf } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
          </div>
        </div>   
    )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return (
    <div>
        {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
       <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(voteAnecdoteOf(anecdote.id))
          }}/>)}
     </div>
  )
}

export default Anecdotes