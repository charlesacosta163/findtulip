import React from "react";
import { getAListing } from "@/lib/actions";
import notFoundImage from "@/public/images/undraw_page-not-found_6wni.svg";
import housePlaceholderImage from "@/public/images/undraw_house_placeholder.svg";
import apartmentPlaceholderImage from "@/public/images/undraw_coming-home_jmbc.svg"
import Image from "next/image";
import Link from "next/link";

import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineKingBed } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const ListItemPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  let [listing]: any = await getAListing(id);

  return (
    <>
      {listing ? (
        <div className="max-w-[800px] self-start py-12 w-full flex flex-col gap-4">

          <section className="flex flex-col items-center sm:items-start sm:flex-row gap-8">

            <div className="w-[250px] flex-1 h-[250px] rounded-lg">
                <Image
                width={1000}
                height={200}
                alt="House Image"
                src={listing.listing_type === "house" ? housePlaceholderImage : apartmentPlaceholderImage}
                />
            </div>

            <div className="flex flex-[2] flex-col gap-4 justify-between">
              <div className="self-start">
                <h1 className="text-4xl text-gray-700 font-bold tracking-tight">
                  {listing.title}
                </h1>
                <p className="text-lg text-gray-500 font-medium mt-4">
                  {listing.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-gray-700 font-medium">
              {
                  listing.listing_type === "house" ?
                  <div className="flex gap-1 font-semibold text-lg items-center line-clamp-2">
                    <HiOutlineHomeModern className="self-start mt-1" />
                    House
                  </div> :
                  <div className="flex gap-1 font-semibold text-lg items-center line-clamp-2">
                    <HiOutlineBuildingOffice2 className="self-start mt-1" />
                    Apartment
                  </div>
                }
                <div className="flex gap-1 items-center line-clamp-2">
                  <LuMapPin className="self-start mt-1" />
                  {listing.address}
                </div>

                <div className="flex gap-1 items-center line-clamp-2">
                  <MdOutlineKingBed className="self-start mt-1" />
                  {listing.num_rooms} Beds
                </div>

                <hr className="w-full border-gray-200" />
                <p className="text-2xl mt-2 font-bold tracking-tight bg-gray-700 text-white px-4 py-2 rounded-full self-start">${listing.rent}/month</p>

                <div className="flex gap-1 items-center line-clamp-2">
                  <MdOutlinePersonPin className="self-start mt-1" />
                  {listing.username}
                </div>
                <div className="flex gap-1 items-cente line-clamp-2">
                  <MdOutlinePhone className="self-start mt-1" />
                  {listing.contact_info}
                </div>

          <Link
            className="self-start cursor-pointer bg-gray-50 text-gray-700 hover:bg-gray-200 px-4 py-2 text-md font-semibold rounded-full border border-gray-200 mt-4"
            href="/listings"
          >
            Back to Listings
          </Link>
              </div>
            </div>
          </section>

        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <Image width={300} height={300} alt="error" src={notFoundImage} />
          <p className="bg-red-400 text-white px-2 py-1 text-xs font-medium rounded-full">
            House not found
          </p>
          <Link
            className="cursor-pointer text-gray-700 hover:underline px-2 py-1 text-sm font-medium rounded-full"
            href="/listings"
          >
            Back to Listings
          </Link>
        </div>
      )}
    </>
  );
};

export default ListItemPage;
