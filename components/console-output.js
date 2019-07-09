import React from 'react'
import PropTypes from 'prop-types'

const ConsoleOutput = ({ kind, content }) => (
  <>
    <h2>Console Output</h2>
    <pre className={`console console--${kind}`}>{content}</pre>
  </>
)

ConsoleOutput.propTypes = {
  kind: PropTypes.oneOf(['log', 'error']),
  content: PropTypes.string
}

export default ConsoleOutput
