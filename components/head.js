import React from 'react'
import NextHead from 'next/head'

const project = 'Promise combinators'
const author = 'Jeremias Menichelli'
const description = 'Playground to explore how Promise combinators work.'
const title = `${project} by ${author}`

const Head = () => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <link
      rel="shortcut icon"
      href="//jeremenichelli.io/assets/favicon/favicon.ico"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="//jeremenichelli.io/assets/favicon/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="//jeremenichelli.io/assets/favicon/favicon-32x32.png"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="promise-combinators.netlify.com" />
    <meta name="twitter:creator" content="@jeremenichelli" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:url"
      content="https://promise-combinators.netlify.com/"
    />
    <meta
      name="twitter:image"
      content="https://jeremenichelli.io/assets/images/twitter-card-2019-05-30.jpeg"
    />
  </NextHead>
)

export default Head
