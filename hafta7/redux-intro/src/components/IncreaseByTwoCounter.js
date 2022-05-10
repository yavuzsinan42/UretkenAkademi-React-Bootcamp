import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
          <button onClick={e=>{
        this.props.dispatch(increaseByTwoCounter())
    }}>2 Artır</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(increaseByTwoCounter())
    }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)
