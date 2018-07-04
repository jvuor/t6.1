import React from 'react'
import { connect } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer'
import { actionSetNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const click = (event) => {
      const targetID = event.target.name

      var likedMsg = `You upvoted "${this.props.anecdotes.find(m => m.id === targetID).content}"`

      this.props.actionVote(targetID)
      this.props.actionSetNotification(likedMsg)
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={click} name={anecdote.id}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const filteredAnecdotes = (anecdotes, filter) => {
  const sortedAnecdotes  = anecdotes
    .filter(m => m.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)

  return sortedAnecdotes
}

const mapStateToProps = (state) => {
  return {
    anecdotes: filteredAnecdotes(state.anecdotes, state.filter.filter)
  }
}

export default connect(mapStateToProps, { actionVote, actionSetNotification })(AnecdoteList)
