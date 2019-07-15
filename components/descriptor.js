import React from 'react'

const DescriptorContent = ({ method, children }) => (
  <p className="descriptor">
    <style jsx>{`
      .method-name {
        color: #4242ef;
      }

      .instructions {
        color: #505060;
      }
    `}</style>
    <strong className="method-name">{method}</strong> 👉 {children}{' '}
    <em className="instructions">
      Click the promises below to change their results and then press&nbsp;
      <strong>RUN</strong>
    </em>
    .
  </p>
)

const Descriptor = ({ method }) => {
  switch (method) {
    case 'all': {
      return (
        <DescriptorContent method={method}>
          it fulfills when all the promises are resolved successfully and rejects{' '}
          when any of the promises is rejected.{' '}
          <code>then</code> receives an array with the results and{' '}
          <code>catch</code> the reason why a promise failed.{' '}
          <em>Use it when you expect all promises to pass</em>.
        </DescriptorContent>
      )
    }
    case 'race': {
      return (
        <DescriptorContent method={method}>
          it settles when the first promise of the collection settles,
          whether that one is resolved successfully or not. <code>then</code>{' '}
          receives the result of the first promise and <code>catch</code> the
          reason why the first promise failed.{' '}
          <em>Great for time thresholds or other async interruptions</em>.
        </DescriptorContent>
      )
    }
    case 'allSettled': {
      return (
        <DescriptorContent method={method}>
          it settles when all promises have been settled, whether they were
          successful or not. <code>then</code> receives an array containing the
          result or the reason why the promise failed.{' '}
          <em>
            Recommended to react to a group of async methods, independently of
            the results, like removing loading spinners or applying specific actions
            to concurrent data fetching
          </em>
          .
        </DescriptorContent>
      )
    }
    case 'any': {
      return (
        <DescriptorContent method={method}>
          it settles as soon as a promise gets fulfilled, or waits ’til all promises
          reject. The main difference with <code>race</code> is it doesn't jump
          to <code>catch</code> when a promise fails but waits for the rest.{' '}
          <code>then</code> receives the result of the first promise and{' '}
          <code>catch</code> an array of reasons why each promise failed.{' '}
          <em>
            Recommended when one async resolution is sufficient but the failure
            of the whole collection needs a following action
          </em>
          .
        </DescriptorContent>
      )
    }
    default:
      return ''
  }
}

export default Descriptor
