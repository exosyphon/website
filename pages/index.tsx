import Head from 'next/head'
import Avatar from '../src/components/avatar'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../src/components/navbar'

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Andrew Courter</title>
        <meta name="description" content="Andrew Courter's site" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-5xl">Hello!</div>
        <div className="text-4xl">I&apos;m Andrew Courter</div>
        <div className="text-l p-1 text-center">
          <div>Experienced Software Engineer, Consultant, Manager,</div>
          <div>and Content Creator on Youtube</div>
        </div>
        <Avatar />
        <div>
          <Link href='https://twitter.com/Exosyphon'>
            <a className='inline-flex items-center p-1'>
              <Image src="/twitter.png" alt="twitter" width="50" height="30" />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/andrew-courter-79126836'>
            <a className='inline-flex items-center p-1'>
              <Image src="/linkedin.png" alt="linkedin" width="30" height="30" />
            </a>
          </Link>
          <Link href='https://github.com/exosyphon'>
            <a className='inline-flex items-center p-1'>
              <Image src="/github.png" alt="github" width="35" height="35" />
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCx3Vist13GWLzRPvhUxQ3Jg/'>
            <a className='inline-flex items-center p-1'>
              <Image src="/youtube.png" alt="github" width="38" height="38" />
            </a>
          </Link>
          <Link href='https://medium.com/@ascourter'>
            <a className='inline-flex items-center p-1'>
              <Image src="/medium.png" alt="github" width="60" height="30" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
