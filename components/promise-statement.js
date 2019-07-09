import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PromiseStatement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'pending'
    }
  }

  trigger = () => {
    const { result, reason, delay, resolution } = this.props
    return new Promise((res, rej) => {
      const method = resolution === 'fulfilled' ? res : rej
      const arg = resolution === 'fulfilled' ? result : reason
      setTimeout(() => {
        method(arg)
        this.setState({ status: resolution })
      }, delay)
    })
  }

  render() {
    const { label } = this.props
    const { status } = this.state

    return (
      <code className="promise">
        <span className="promise--label">{`  ${label}()`}</span>
        <span className={`promise--status promise--status__${status}`} />
      </code>
    )
  }
}

PromiseStatement.defaultProps = {
  delay: 1000
}

PromiseStatement.propTypes = {
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
  resolution: PropTypes.oneOf(['fulfilled', 'rejected'])
}

export default PromiseStatement
