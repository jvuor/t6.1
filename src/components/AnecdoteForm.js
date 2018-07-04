import React from 'react'
import { connect } from 'react-redux'
import { actionCreate } from '../reducers/anecdoteReducer'
import { actionSetNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const savedAnecdote = await anecdoteService.createNew(content)
    console.log(savedAnecdote)
    this.props.actionCreate(savedAnecdote)
    this.props.actionSetNotification(`Added "${content}" as a new anecdote!`)

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
