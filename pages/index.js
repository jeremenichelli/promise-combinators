import React from 'react'
import Playground from '../components/playground'

import allSettled from 'promise.allsettled'
import promiseAny from 'promise-any'

// shim new methods!
allSettled.shim()
Promise.any = Promise.any ? Promise.any : promiseAny

export default () => (
  <>
    <style jsx global>{`
      body {
        color: #010120;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        padding: 20px;
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
    `}</style>
    <style jsx>{`
      .author,
      .note {
        color: #505060;
      }
    `}</style>
    <h1>Promise combinators</h1>
    <p className="author">
      Created by <a href="//jeremenichelli.io">Jeremias Menichelli</a>
    </p>
    <p>Explore how the upcoming, and already existing, Promise methods work.</p>
    <p className="note">
      <em>
        Promise.allSettled is polyfilled with promise.allsettled package by{' '}
        <a href="https://github.com/ljharb">Jordan Harband</a> and Promise.any
        with promise-any by{' '}
        <a href="https://github.com/m0ppers">Andreas Streichardt</a>
      </em>
      .
    </p>
    <Playground />
  </>
)
