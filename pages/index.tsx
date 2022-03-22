import Head from 'next/head'

function Index() {
  return (
    <div>
      <Head>
        <title>Andrew Courter</title>
        <meta name="description" content="Andrew Courter's site" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="text-5xl">Hello! My name is Andrew Courter</div>
      </main>
    </div>
  )
}

export default Index
