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

    return (
      <code className="promise">
        <style jsx>{`
          .promise--label {
            font-weight: bold;
          }
        `}</style>
        <span className="promise--label">{`  ${label}()`}</span>
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
