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
      <>
        <h3>The code</h3>
        <pre className="promise--collection">
          <code>{`Promise.${promiseMethod}([\n`}</code>
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
              <code key={i}>{`\n.then(${statement})`}</code>
            ))}
          {catchStatement && <code>{`\n.catch(${catchStatement})`}</code>}
        </pre>
      </>
    )
  }
}

export default PromiseCollection
