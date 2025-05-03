import tulipLogo from '@/public/images/tulip-flower-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {

  return (
    <div className="self-center w-full flex justify-center items-center">
        
        <div className="flex flex-col items-center max-w-[400px] w-full">
          <header className='flex flex-col gap-2 items-center'>
            <Image src={tulipLogo} width={100} height={100} alt='Tulip Logo'/>
            <h2 className="text-3xl font-medium text-gray-700 tracking-tight text-center">List your place in quick fashion with <b>Find<span className="text-red-400">Tulip</span></b></h2>
            <p className='text-gray-400 text-center font-medium text-sm text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, atque.</p>
          </header>

          <div className="flex gap-4 mt-4">
            <Link href='/listings' className="px-4 py-2 rounded-full bg-gray-700 text-white font-semibold text-sm">Go To Listings</Link>
            <Link href='/create' className="px-4 py-2 rounded-full bg-[#A0C878] hover:bg-green-600 text-white font-semibold text-sm">Create Listing</Link>
          </div>
        </div>
    </div>
  );
}
