import React from 'react'
import { actionSetFilter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    const filterInput = event.target.value
    this.props.store.dispatch(actionSetFilter(filterInput))
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter