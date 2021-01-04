For getStaticProps, getStaticPaths, and getServerSideProps, you can use the GetStaticProps, GetStaticPaths, and GetServerSideProps types respectively:

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}


--- 


The following is an example of how to use the built-in types for API routes:

import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // ...
}


---


You can convert pages/_app.js into pages/_app.tsx and use the built-in type AppProps, like so:

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App

example code: https://nextjs.org/learn/excel/typescript/nextjs-types