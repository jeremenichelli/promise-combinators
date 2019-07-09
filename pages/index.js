import React from 'react'
import Playground from '../components/playground'

import allSettled from 'promise.allsettled'
import promiseAny from 'promise-any'

// shim new methods!
allSettled.shim()
Promise.any = Promise.any ? Promise.any : promiseAny

export default () => <Playground />
