import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { RiDiscordLine, RiLogoutBoxLine } from "react-icons/ri";

import { getListingsByUser, signOutFromDiscord } from "@/lib/actions";
import ListItemUser from "@/components/list-item-user";

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  const { user } = session;

  const userListings = await getListingsByUser(user?.email as string) || [];

  console.log(userListings);
  return (
    <div className="self-start max-w-[800px] w-full flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Profile</h1>
        <div className="p-8 bg-white shadow rounded-lg flex md:flex-row flex-col items-center gap-8">
          <Image
            src={user?.image as string}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-[#DDEB9D]"
          />

          <div className="flex flex-col gap-2 text-gray-700 flex-1 md:text-left text-center">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>

            <div className="flex justify-between items-center gap-4">
              <span className="flex items-center gap-2 text-white bg-[#A0C878] px-3 py-1 rounded-full text-xs font-semibold self-start">
                <RiDiscordLine />
                Linked With Discord
              </span>

              <form action={signOutFromDiscord}>
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white bg-red-400 hover:bg-red-500 duration-300 cursor-pointer px-3 py-1 rounded-full text-xs font-semibold self-start"
                >
                  <RiLogoutBoxLine />
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Listings</h1>
        <div className="grid grid-cols-1 gap-4">
            {userListings.length > 0 ? userListings.map((listing: any) => (
                <ListItemUser key={listing.id} id={listing.id} title={listing.title} description={listing.description} listingType={listing.listing_type} address={listing.address} rent={listing.rent} numRooms={listing.num_rooms} contactInfo={listing.contact_info} />
            )) : <div className="text-gray-500">No listings found</div>}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
