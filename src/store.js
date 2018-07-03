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

const action = () => {
  return { type: 'EMPTY' }
}

store.subscribe(() => {
  const notificationMessage = store.getState().notification.notification
  if (notificationMessage) {
    setTimeout( () => {
      //store.dispatch(action)            //<- ei toimi wtf
      store.dispatch({ type: 'EMPTY' }) //<- toimii
    }, 5000)
  }
})

export default store