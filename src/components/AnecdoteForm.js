import React from 'react'
import { connect } from 'react-redux'
import { actionCreate } from '../reducers/anecdoteReducer'
import { actionSetNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.actionCreate(content)
    this.props.actionSetNotification(`Added "${content}" as a new anecdote!`)

    e.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { actionCreate, actionSetNotification })(AnecdoteForm)
