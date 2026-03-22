import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/navbar'

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Head>
        <title>About — Andrew Courter</title>
        <meta name="description" content="About Andrew Courter, Director of Engineering" />
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>
        <div className="space-y-5 text-zinc-400 leading-relaxed">
          <p>
            Andrew Courter is a Director of Engineering with over 15 years of experience building
            software and the teams that ship it. He&apos;s known for a pragmatic, no-nonsense approach
            to engineering leadership — favoring working software and strong team culture over process
            overhead.
          </p>
          <p>
            His career spans healthcare, finance, defense, airline travel, and media. He got his first
            taste of Extreme Programming at the American Thrombosis and Hemostasis Network (ATHN), then
            joined Pivotal Labs as a Staff Software Engineer. After that he founded EarthVectors, a
            consultancy where he helped clients cut costs and ship faster through XP practices, before
            moving into VP of Technology and Director of Engineering roles.
          </p>
          <p>
            Outside of work, Andrew creates content on{' '}
            <Link href="https://www.youtube.com/channel/UCx3Vist13GWLzRPvhUxQ3Jg/">
              <a className="text-zinc-200 underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Link>
            ,{' '}
            <Link href="https://andrewcourter.substack.com/">
              <a className="text-zinc-200 underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </Link>
            , and{' '}
            <Link href="https://medium.com/@ascourter">
              <a className="text-zinc-200 underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer">
                Medium
              </a>
            </Link>{' '}
            — mostly about engineering leadership, developer tooling, and living in the command line
            with Neovim and CLI tools. He holds an M.S. and B.S. in Computer Science from Texas Tech
            University.
          </p>
        </div>
      </main>
    </div>
  )
}

export default About
