import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
//import { actionEmptyNotification } from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)
var timer

const action = () => {
  return { type: 'EMPTY' }
}

const setTimer = () => {
  if (timer) { clearTimeout(timer) }

  timer = setTimeout(() => {
    store.dispatch({ type: 'EMPTY' })
  }, 5000)
}

store.subscribe(() => {
  const notificationMessage = store.getState().notification.notification
  if (notificationMessage) { setTimer() }
})

export default store