import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getId = () => (100000*Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const newAnecdote = {
    content: content,
    id: getId(),
    votes: 0
  }
  const response = await axios.post(url, newAnecdote)
  return response.data
}

const upvoteAnecdote = async (id) => {
  const response = await axios.get(`${url}/${id}`)
  const anecdote = response.data
  anecdote.votes += 1
  await axios.put(`${url}/${id}`, anecdote)
}

export default { getAll, createNew, upvoteAnecdote }