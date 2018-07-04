import React from 'react'
import { connect } from 'react-redux'
import { actionSetFilter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    const filterInput = event.target.value
    this.props.actionSetFilter(filterInput)
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


export default connect(null, { actionSetFilter })(Filter)