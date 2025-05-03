'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

// Append query params to the url

const FilterListingForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const filter = formData.get('filter');

        if (filter) 
            router.push(`/listings?filter=${filter}`);
        
        else
            router.push(`/listings`);
        
    }
  return (
    <form className='flex gap-4 items-center' onSubmit={handleSubmit}>
        <select name="filter" id="filter" className='bg-[#FAF6E9] border border-gray-200 p-2 rounded-md  outline-none focus:border-none focus:ring-2 focus:ring-[#DDEB9D] [&>option]:text-gray-700 [&>option]:font-medium [&>option]:text-sm'>
            <option value="">All</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
        </select>
        <button type='submit' className='bg-blue-500 text-sm font-medium text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-all duration-300 cursor-pointer'>Apply</button>
    </form>
  )
}

export default FilterListingForm