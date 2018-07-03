import React from 'react'
import { actionVote } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {
  render() {
    const filter = this.props.store.getState().filter.filter
    console.log('filter', filter, typeof filter)
    const anecdotes = this.props.store.getState().anecdotes
      .filter(m => m.content.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.props.store.dispatch(actionVote(anecdote.id))
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
