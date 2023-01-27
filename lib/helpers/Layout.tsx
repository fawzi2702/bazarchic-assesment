import Head from 'next/head'
import { CSSProperties, FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const style: CSSProperties = {
    height: '100vh',
  }

  return (
    <>
      <Head>
        <title>Bazarchic Assesment</title>
        <meta name="description" content="A little infinite scroll list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section style={style}>{children}</section>
      </main>
    </>
  )
}
