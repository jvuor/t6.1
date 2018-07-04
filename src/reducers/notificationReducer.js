const notificationAtStart = null

const initialState = { notification: notificationAtStart }

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
  return {
    type: 'SET',
    notification: notification
  }
}

export const actionEmptyNotification = () => {
  return {
    type: 'EMPTY'
  }
}