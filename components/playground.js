import React, { Component, createRef } from 'react'
import PromiseCollection from './promise-collection'
import StatusSwitcher from './status-switcher'
import ConsoleOutput from './console-output'
import Descriptor from './descriptor'

import config from '../config.js'

function buildCollection(promises, statuses) {
  const collection = promises.map((p, i) => {
    const item = Object.assign({}, p)
    item.resolution = statuses[i].status
    item.delay = Math.random() * 1000
    return item
  })
  return collection
}

class Playground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: '',
      consoleContent: '',
      consoleKind: 'log',
      statusCollection: []
    }

    this.collectionRef = createRef()
  }

  handleStart = () => {
    this.setState({ consoleContent: '', consoleKind: 'log' }, () =>
      this.collectionRef.current.start()
    )
  }

  static getDerivedStateFromProps(props, state) {
    if (props.method !== state.method && config[props.method]) {
      const statusCollection = config[props.method].collection.map((p) => {
        return { status: p.resolution, label: p.result }
      })

      return {
        method: props.method,
        statusCollection,
        consoleContent: '',
        consoleKind: 'log'
      }
    }

    return null
  }

  updateStatuses = (statusCollection) => {
    this.setState({ statusCollection })
  }

  render() {
    const { method, consoleContent, consoleKind, statusCollection } = this.state
    const promiseDescriptor = config[method]

    return (
      <div className="playground">
        <style jsx>{`
          @media (min-width: 1000px) {
            .playground {
              display: flex;
            }

            .panel {
              flex: 1 1 0;
            }

            .config-panel {
              margin: 0 4em 0 0;
            }
          }

          .playground--cta {
            background-color: #4242ef;
            border-radius: 3px;
            border-width: 0;
            color: #ffffff;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.03em;
            margin: 1em 0 0;
            min-width: 7em;
            padding: 1em;
            text-transform: uppercase;
          }

          .playground--cta:hover {
            background-color: #6262ef;
          }

          .playground--cta:active {
            transform: scale(0.95);
          }
        `}</style>
        <div className="panel config-panel">
          {method && (
            <>
              <Descriptor method={method} />
              <StatusSwitcher
                statuses={statusCollection}
                onChange={this.updateStatuses}
              />
              <button className="playground--cta" onClick={this.handleStart}>
                Run
              </button>
            </>
          )}
        </div>
        <div className="panel code-panel">
          {method && (
            <>
              <PromiseCollection
                ref={this.collectionRef}
                promiseMethod={method}
                collection={buildCollection(
                  promiseDescriptor.collection,
                  statusCollection
                )}
                thenStatements={promiseDescriptor.thenStatements}
                catchStatement={promiseDescriptor.catchStatement}
                thenMethod={(r) =>
                  this.setState({
                    consoleContent: promiseDescriptor.thenMethod(r),
                    consoleKind: 'success'
                  })
                }
                catchMethod={(r) =>
                  this.setState({
                    consoleContent: promiseDescriptor.catchMethod(r),
                    consoleKind: 'error'
                  })
                }
              />
              <ConsoleOutput kind={consoleKind} content={consoleContent} />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Playground
