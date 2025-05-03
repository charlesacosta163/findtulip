import React from 'react'

import { getAllListings } from '@/lib/actions';
import ListItem from '@/components/list-item';

const ListingsPage = async () => {
    const listings = await getAllListings() || [];

  return (
    <div className='self-start justify-start w-full'>
        
        <h1 className='text-4xl text-gray-700 font-bold tracking-tight'>All Listings</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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