const getId = () => (100000*Math.random()).toFixed(0)

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
  return {
    type: 'CREATE',
    content: content
  }
}

export const actionInit = (data) => {
  return {
    type: 'INIT',
    data: data
  }
}