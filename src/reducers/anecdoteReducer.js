import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  if (action.type === 'CREATE') {

    return [...store, action.content ]
  }
  if (action.type === 'INIT') {
    return action.data
  }

  return store
}

export default reducer

export const actionVote = (target) => {
  return {
    type: 'VOTE',
    id: target
  }
}

export const actionCreate = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      content: newAnecdote
    })
  }
}

export const actionInit = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}