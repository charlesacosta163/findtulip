import React from 'react'

import { getAllListings } from '@/lib/actions';
import ListItem from '@/components/list-item';
import FilterListingForm from '@/components/filterlistingform';
const ListingsPage = async ({searchParams}: {searchParams: Promise<{filter: string}>}) => {
    const {filter} = await searchParams;
    
    let listings;

    if (filter) 
        listings = await getAllListings(filter) || [];

    else
        listings = await getAllListings() || [];

  return (
    <div className='flex flex-col gap-8 self-start justify-start w-full'>
        
        <div className='flex sm:justify-start justify-between items-center sm:gap-8 gap-4'>
            <h1 className='text-4xl text-gray-700 font-bold tracking-tight'>All Listings</h1>
            <FilterListingForm />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                listings?.length > 0 ?
                listings?.map(e => <ListItem 
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    address={e.address}
                    rent={e.rent}
                    numRooms={e.num_rooms}
                    contactInfo={e.contact_info}
                    listingType={e.listing_type}
                />) : <span>No listings available</span>
            }
        </section>
    </div>
  )
}

export default ListingsPage