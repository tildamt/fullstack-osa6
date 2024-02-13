import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async (id) => {
  const response =await axios.get(`${baseUrl}/${id}`)
  const anecdoteToChange = response.data
  console.log('id', id)
  console.log('response', anecdoteToChange)
  const newAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1}
  const request = axios.put(`${baseUrl}/${id}`, newAnecdote)
  return request.data
}

export default { getAll, createNew, voteAnecdote }