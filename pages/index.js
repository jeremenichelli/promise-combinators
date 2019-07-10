import React, { useState } from 'react'
import Playground from '../components/playground'

import config from '../config'

import allSettled from 'promise.allsettled'
import promiseAny from 'promise-any'
import PromiseSelector from '../components/promise-selector'

// shim new methods!
allSettled.shim()
Promise.any = Promise.any ? Promise.any : promiseAny

const options = Object.keys(config)

export default () => {
  const [method, handleMethodChange] = useState('')
  return (
    <div>
      <style jsx>{`
        .excerpt {
          color: #505060;
          max-width: 40em;
        }
      `}</style>
      <style jsx global>{`
      body {
        color: #010120;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        line-height: 1.65;
        padding: 20px;
      }

      * {
        box-sizing: border-box;
      }

      h1 {
        margin: 0;
      }

      a {
        color: #4242ef;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      code {
        font-size 14px;
        font-family: Menlo,Consolas,Monaco,monospace
      }

      pre {
        background-color: rgba(0,0,10,0.035);
        border-radius: 3px;
        overflow: auto;
        padding: .75rem 1rem;
      }
    `}</style>
      <h1>Promise combinators</h1>
      <p className="excerpt">
        Created by <a href="//jeremenichelli.io">Jeremias Menichelli</a>.
        Explore how the upcoming, and already existing, Promise methods work.{' '}
        <em>
          Promise.allSettled is polyfilled with promise.allsettled package by{' '}
          <a href="https://github.com/ljharb">Jordan Harband</a> and Promise.any
          with promise-any by{' '}
          <a href="https://github.com/m0ppers">Andreas Streichardt</a>
        </em>
        .
      </p>
      <PromiseSelector
        value={method}
        onChange={handleMethodChange}
        options={options}
      />
      <Playground method={method} />
    </div>
  )
}
