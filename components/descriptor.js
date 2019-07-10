import React from 'react'

const DescriptorContent = ({ method, children }) => (
  <p className="descriptor">
    <style jsx>{`
      .method-name {
        color: #4242ef;
      }
    `}</style>
    <strong className="method-name">{method}</strong>, {children}
  </p>
)

const Descriptor = ({ method }) => {
  switch (method) {
    case 'all': {
      return (
        <DescriptorContent method={method}>
          it fulfills when all the promises are resolved succesfully and jumps
          to <code>catch</code> when any of the promises is rejected,{' '}
          <code>then</code> receives an array with the results and{' '}
          <code>catch</code> the reason why a promise failed.{' '}
          <em>Use it when you need all promises to pass</em>.
        </DescriptorContent>
      )
    }
    case 'race': {
      return (
        <DescriptorContent method={method}>
          it resolves when the first promise of the collection comes back,
          whether that one is resolved successfully or not, <code>then</code>{' '}
          receives the result of the first promise and <code>catch</code> the
          reason why the first promise failed.{' '}
          <em>Great for time thresholds or other async interruptions</em>.
        </DescriptorContent>
      )
    }
    case 'allSettled': {
      return (
        <DescriptorContent method={method}>
          it settles when all promises have been resolved, whether they were
          successful or not, <code>then</code> receives an array containing
          whther the result or the reason why the promise failed.{' '}
          <em>
            Recommended to react to a group of async methods, independently of
            the results like removing spinners or apply granular actions to
            concurrent data fetching
          </em>
          .
        </DescriptorContent>
      )
    }
    case 'any': {
      return (
        <DescriptorContent method={method}>
          it will settled when the first promise gets fulfilled, or wait til all
          failed. The main difference with <code>race</code> is it doesn't jumps
          to <code>catch</code> when a promise fails but waits for the rest,{' '}
          <code>then</code> receives the result of the first promise and{' '}
          <code>catch</code> an array of reasons why each promise fail.{' '}
          <em>
            Recommended when one async resolution is sufficient but the failure
            of the whole collection needs a folloqing action
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
