const notificationAtStart = null
const initialState = { notification: notificationAtStart }

var timer = null

const reducer = (store = initialState, action) => {
  if (action.type==='SET') {
    return { notification: action.notification }
  }
  if (action.type === 'EMPTY') {
    return { notification: null }
  }

  return store
}

export default reducer

export const actionSetNotification = (notification) => {
  return async (dispatch) => {

    dispatch({ type: 'SET', notification:notification })

    if (timer) { clearTimeout(timer) }

    timer = setTimeout(() => {
      dispatch({ type: 'EMPTY' })
    }, 5000)
  }
}

export const actionEmptyNotification = () => {
  return {
    type: 'EMPTY'
  }
}