import React from 'react'
import Playground from '../components/playground'

import allSettled from 'promise.allsettled'
import promiseAny from 'promise-any'

// shim new methods!
allSettled.shim()
Promise.any = Promise.any ? Promise.any : promiseAny

export default () => (
  <>
    <h1>Promise combinators</h1>
    <p className="author">
      Created by <a href="//jeremenichelli.io">Jeremias Menichelli</a>
    </p>
    <p>Explore how the upcoming, and already existing, Promise methods work.</p>
    <p>
      <em>
        Promise.allSettled is polyfill with promise.allsettled package by{' '}
        <a href="https://github.com/ljharb">Jordan Harband</a> and Promise.any
        with promise-any by{' '}
        <a href="https://github.com/m0ppers">Andreas Streichardt</a>
      </em>
      .
    </p>
    <Playground />
  </>
)
