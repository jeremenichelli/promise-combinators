import React from 'react'
import PropTypes from 'prop-types'

const ConsoleOutput = ({ kind, content }) => (
  <>
    <h3>Console Output</h3>
    <pre className={`console console--${kind}`}>{content}</pre>
  </>
)

ConsoleOutput.propTypes = {
  kind: PropTypes.oneOf(['log', 'error']),
  content: PropTypes.string
}

export default ConsoleOutput
