const filterAtStart = { filter: '' }

const reducer = ( store = filterAtStart, action) => {
  if(action.type === 'SETFILTER') {
    return { filter: action.filter }
  }
  if(action.type === 'CLEARFILTER') {
    return { filter: '' }
  }

  return store
}

export default reducer

const actionSetFilter = (filter) => {
  return {
    type: 'SETFILTER',
    filter: filter
  }
}

const actionClearFilter = () => {
  return {
    type: 'CLEARFILTER'
  }
}

export { actionSetFilter, actionClearFilter }