import React, { Component, createRef } from 'react'

import PromiseStatement from './promise-statement'

class PromiseCollection extends Component {
  constructor(props) {
    super(props)
    this.promiseRefs = props.collection.map((_) => createRef())
  }

  start = () => {
    const { promiseMethod, thenMethod, catchMethod } = this.props
    const promises = this.promiseRefs.map((p) => p.current.trigger())
    window.Promise[promiseMethod](promises)
      .then(thenMethod)
      .catch(catchMethod)
  }

  render() {
    const {
      promiseMethod,
      thenStatements,
      catchStatement,
      collection
    } = this.props

    return (
      <pre className="promise--collection">
        <style jsx>{`
          .code-method,
          .code-then,
          .code-catch {
            font-weight: bold;
          }
        `}</style>
        <code>
          {`Promise.`}
          <span className="code-method">{promiseMethod}</span>
          {`([\n`}
        </code>
        {collection.map((s, i) => (
          <React.Fragment key={i}>
            <PromiseStatement
              ref={this.promiseRefs[i]}
              delay={s.delay}
              result={s.result}
              reason={s.reason}
              resolution={s.resolution}
              label={s.label}
            />
            {i !== collection.length - 1 && ',\n'}
          </React.Fragment>
        ))}
        <code>{`\n])`}</code>
        {thenStatements &&
          thenStatements.map((statement, i) => (
            <code key={i}>
              {`\n.then(`}
              <span className="code-then">{statement}</span>
              {`)`}
            </code>
          ))}
        {catchStatement && (
          <code>
            {`\n.catch(`}
            <span className="code-catch">{catchStatement}</span>
            {`)`}
          </code>
        )}
      </pre>
    )
  }
}

export default PromiseCollection
