import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../src/components/navbar'

const Services = () => {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="text-5xl">Services</div>
                <div className="max-w-5xl mt-2 p-2">
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>Need help with interviewing? Send me a request.</div>
                        <Link href="https://forms.gle/EUphVY3KzQ1SgvJg9">
                            <a className='text-2xl underline hover:italic'>Interview Help</a>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>Need general help? Send me a request.</div>
                        <Link href="https://forms.gle/jDdrYkbswhiUoPJ38">
                            <a className='text-2xl underline hover:italic'>General Help</a>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <div className='text-center'>Interested in advertising content on my blog or Youtube?</div>
                        <div className='text-2xl'>DM me on <Link href='https://twitter.com/Exosyphon'><a className='underline hover:italic'>Twitter</a></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services