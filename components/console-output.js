import React from 'react'
import PropTypes from 'prop-types'

const ConsoleOutput = ({ kind, content }) => {
  const entries = Array.isArray(content) ? content : [content]
  return (
    <div className="console">
      <style jsx>{`
        code {
          display: block;
        }

        .console--success {
          background-color: #f1f8e9;
        }

        .console--error {
          background-color: #ffebee;
        }
      `}</style>
      <p>
        <strong>Console output</strong>
      </p>
      <pre className={`console console--${kind}`}>
        {entries.map((e) => (
          <code>&gt;&nbsp;{e}</code>
        ))}
      </pre>
    </div>
  )
}

ConsoleOutput.propTypes = {
  kind: PropTypes.oneOf(['log', 'error', 'success']),
  content: PropTypes.string
}

export default ConsoleOutput
