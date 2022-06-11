import Link from 'next/link'
import Navbar from '../src/components/navbar'

const Products = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="text-5xl">Products</div>
                <div className="max-w-5xl mt-2 p-2">
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>Like mechanical keyboards? Check out my store with some keyboard designs.</div>
                        <Link href="https://andrewcourter.creator-spring.com">
                            <a className='text-2xl underline hover:italic'>Apparel</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products