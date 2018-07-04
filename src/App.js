import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { actionInit } from './reducers/anecdoteReducer'

class App extends React.Component {

  componentDidMount = async () => {
    anecdoteService.getAll().then(anecdotes => {
      this.props.actionInit(anecdotes)
    })
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Filter  />
        <Notification  />
        <AnecdoteList  />
        <AnecdoteForm  />
      </div>
    )
  }
}

export default connect(null, { actionInit })(App)