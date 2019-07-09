import React, { Component, createRef } from 'react'
import PromiseCollection from './promise-collection'
import PromiseSelector from './promise-selector'
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
      methodValue: '',
      consoleContent: '',
      consoleKind: 'log',
      statusCollection: []
    }

    this.collectionRef = createRef()
  }

  handleStart = () => {
    this.cleanConsole()
    this.collectionRef.current.start()
  }

  handleMethodChange = (methodValue) => {
    const statusCollection = config[methodValue].collection.map((p) => {
      return { status: p.resolution, label: p.result }
    })

    this.cleanConsole()
    this.setState({ methodValue, statusCollection })
  }

  cleanConsole = () => {
    this.setState({ consoleContent: '', consoleKind: 'log' })
  }

  updateStatuses = (statusCollection) => {
    this.setState({ statusCollection })
  }

  render() {
    const {
      methodValue,
      consoleContent,
      consoleKind,
      statusCollection
    } = this.state
    const promiseDescriptor = config[methodValue]

    return (
      <>
        <PromiseSelector
          onChange={this.handleMethodChange}
          value={methodValue}
          options={Object.keys(config)}
        />
        {methodValue && (
          <>
            <Descriptor method={methodValue} />
            <StatusSwitcher
              statuses={statusCollection}
              onChange={this.updateStatuses}
            />
            <button onClick={this.handleStart}>Run</button>
            <PromiseCollection
              ref={this.collectionRef}
              promiseMethod={methodValue}
              collection={buildCollection(
                promiseDescriptor.collection,
                statusCollection
              )}
              thenStatements={promiseDescriptor.thenStatements}
              catchStatement={promiseDescriptor.catchStatement}
              thenMethod={(r) =>
                this.setState({
                  consoleContent: promiseDescriptor.thenMethod(r)
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
      </>
    )
  }
}

export default Playground
