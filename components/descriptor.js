import React from 'react'

const Descriptor = ({ method }) => {
  switch (method) {
    case 'all': {
      return (
        <p className="descriptor">
          It fulfills when all the promises are resolved succesfully and jumps
          to <code>catch</code> when any of the promises is rejected,{' '}
          <code>then</code> receives an array with the results and{' '}
          <code>catch</code> the reason why a promise failed.{' '}
          <em>Use it when you need all promises to pass</em>.
        </p>
      )
    }
    case 'race': {
      return (
        <p className="descriptor">
          It resolves when the first promise of the collection comes back,
          whether that one is resolved successfully or not, <code>then</code>{' '}
          receives the result of the first promise and <code>catch</code> the
          reason why the first promise failed.{' '}
          <em>Great for time thresholds or other async interruptions</em>.
        </p>
      )
    }
    case 'allSettled': {
      return (
        <p className="descriptor">
          It settles when all promises have been resolved whether they were
          successful or not, <code>then</code> receives an array containing
          whther the result or the reason why the promise failed.{' '}
          <em>
            Recommended to react to a group of async methods, independently of
            the results like removing spinners or apply granular actions to
            concurrent data fetching
          </em>
          .
        </p>
      )
    }
    case 'any': {
      return (
        <p className="descriptor">
          It will settled when the first promise gets fulfilled, or wait til all
          failed. The main difference with <code>race</code> is it doesn't jumps
          to <code>catch</code> when a promise fails but waits for the rest,{' '}
          <code>then</code> receives the result of the first promise and{' '}
          <code>catch</code> an array of reasons why each promise fail.{' '}
          <em>
            Recommended when one async resolution is sufficient but the failure
            of the whole collection needs a folloqing action
          </em>
          .
        </p>
      )
    }
    default:
      return ''
  }
}

export default Descriptor
