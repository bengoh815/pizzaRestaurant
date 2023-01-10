import Head from 'next/head'
import Featured from '../components/Featured'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza Restaurant on Mars" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </>
  )
}
