import React from 'react'
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase/supabase';
import Link from 'next/link';
import Image from 'next/image';
import notAllowedImg from '@/public/images/undraw_notify_rnwe.svg'
import UpdateListingForm from '@/components/updatelistingform';

const UpdateListingPage = async ({
    params,
  }: {
    params: Promise<{ id: number }>;
  }) => {
    const session = await auth();
    if (!session) {
        redirect("/signin");
    }

    const { user } = session;  // Get the user information from the session
    const { id } = await params; // Get the id from the params

    const { data: listing, error } = await supabase
    .from('listings')
    .select('*')
    .eq('id', id)
    .single();

    if(error) {
        console.error(error);
        return <div>Error loading listing</div>;
    }

    if(listing.username !== user?.name) {
        return <div className='flex flex-col gap-2 justify-center items-center'>
            <Image src={notAllowedImg} alt="Not allowed" width={200} height={200} />
            <h1 className='text-4xl font-bold text-red-400'>403 Unauthorized</h1>
            <Link href="/listings" className='text-blue-500 font-semibold hover:underline'>Go back to listings</Link>
        </div>;
    }
    
    
  return (
    <UpdateListingForm listing={listing} />
  )
}

export default UpdateListingPage;