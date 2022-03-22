import Head from 'next/head'

function Index() {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="An app" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="text-5xl">Hello! My name is Andrew Courter</div>
      </main>
    </div>
  )
}

export default Index
