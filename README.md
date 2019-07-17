# Promise combinators

[promise-combinators.netlify.com](//promise-combinators.netlify.com/)

Playground to explore how Promise combinators work.

_Promise methods work. Promise.allSettled is polyfilled with promise.allsettled package by [Jordan Harband](//github.com/ljharb) and Promise.any with promise-any by [Andreas Streichardt](https://github.com/m0ppers)._

## About the project

This site was built using [Next.js](//nextjs.org/), [styled-jsx](//github.com/zeit/styled-jsx) and bad code from a 1x engineer, but hey it works!

Hosted by [Netlify](//netlify.com) cause I have 99 problems in my life but deployments ain't one.

## About the combinators

Initially `Promise` was released with `all` and `race`, but there's a proposal for two new folks, `allSettled` and `any`. I hope this little microsite helps you exploring and understanding them better.

_Read more about the new promise combinators [in this article](//css-tricks.com/a-peek-at-new-methods-coming-to-promises/)._

## Credits

 - I first heard about the upcoming combinators by [this tweet by Stefan Judis](//twitter.com/stefanjudis/status/1140535050230030336).
 - Heavily inspired by [Sarah Drasner's Array Explorer](//github.com/sdras/array-explorer), and [this post](https://v8.dev/features/promise-combinators) from the V8 team blog.
 - Thanks [Mathias Bynens](//twitter.com/mathias) for the early feedback!
