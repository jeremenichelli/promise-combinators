import React, { useState } from 'react'
import Head from '../components/head'
import Playground from '../components/playground'

import config from '../config'

import allSettled from 'promise.allsettled'
import promiseAny from 'promise-any'
import PromiseSelector from '../components/promise-selector'
import GitHubCorner from 'react-github-corner'

// shim new methods!
allSettled.shim()
Promise.any = Promise.any ? Promise.any : promiseAny

const options = Object.keys(config)

export default () => {
  const [method, handleMethodChange] = useState('')
  return (
    <>
      <Head />
      <div className="app">
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
        <GitHubCorner
          href="//github.com/jeremenichelli/promise-combinators"
          bannerColor="#4242ef"
        />
        <h1>Promise combinators</h1>
        <p className="excerpt">
          Created by <a href="//jeremenichelli.io">Jeremias Menichelli</a>.
          Explore how Promise methods work. Heavily inspired by{' '}
          <a href="//github.com/sdras/array-explorer">
            Sarah Drasner's Array Explorer
          </a>{' '}
          and <a href="//v8.dev/features/promise-combinators">this post</a> from
          the V8 team blog.
        </p>
        <p>
          <em>
            Read more about the upcoming Promise combinators in{' '}
            <a href="https://css-tricks.com/a-peek-at-new-methods-coming-to-promises/">
              this article
            </a>
            .
          </em>
        </p>
        <PromiseSelector
          value={method}
          onChange={handleMethodChange}
          options={options}
        />
        <Playground method={method} />
      </div>
    </>
  )
}
