import React from "react";
import Image from "next/image";
import houseImg from "@/public/images/undraw_house_placeholder.svg";
import apartmentImg from "@/public/images/undraw_coming-home_jmbc.svg"
import { ListingSchema } from "@/lib/types";
import { deleteListing } from "@/lib/actions";
import Link from "next/link";

import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineKingBed } from "react-icons/md";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";


const ListItemUser = ({
  id,
  title,
  description,
  address,
  rent,
  numRooms,
  contactInfo,
  listingType,
}: ListingSchema) => {
  return (
    <div
      id="list-item"
      className="flex flex-col w-full sm:flex-row sm:h-[225px] overflow-hidden bg-[#FAF6E9] rounded-md shadow"
    >
      <div className="w-full sm:w-auto flex justify-center sm:justify-start p-4">
        <Image width={150} height={150} alt="House Image" src={listingType === "house" ? houseImg : apartmentImg} />
      </div>

      <div className="flex-1 flex flex-col gap-2 justify-between p-4 rounded-r-lg">
        <div>
          <h2 className="font-semibold text-lg tracking-tight line-clamp-2">
            {title}
          </h2>

          <div className="flex justify-between items-center text-sm text-gray-400 font-semibold mt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-white">
              ${rent as number}/month
            </span>
            <span>For rent</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-gray-700">
          {listingType === "house" ? (
            <div className="flex gap-1 font-bold items-center line-clamp-2">
              <HiOutlineHomeModern className="self-start mt-1" />
              House
            </div>
          ) : (
            <div className="flex gap-1 font-bold items-center line-clamp-2">
              <HiOutlineBuildingOffice2 className="self-start mt-1" />
              Apartment
            </div>
          )}
          <div className="flex gap-1 items-center font-medium line-clamp-2">
            <LuMapPin className="self-start mt-1" />
            {address}
          </div>

          <div className="flex justify-between gap-2 items-center font-medium">
            <div className="flex gap-1 items-center">
              <MdOutlinePhone className="self-start mt-1" />
              {contactInfo}
            </div>

            <div className="flex gap-1 items-center">
              <MdOutlineKingBed className="self-start mt-1" />
              {numRooms as number} Beds
            </div>
            
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Link href={`/listings/edit/${id}`} className="bg-gray-700 hover:bg-gray-800 duration-300 cursor-pointer text-sm text-white font-semibold px-4 py-1 rounded-full flex items-center gap-2">
              <FiEdit2 />
              Edit
            </Link>
            <form action={deleteListing}>
              <button type="submit" className="bg-red-400 hover:bg-red-500 duration-300 cursor-pointer text-sm font-semibold text-white px-4 py-1 rounded-full flex items-center gap-2">
                <BsTrash />
                Delete
              </button>
              <input type="hidden" name="id" value={id} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemUser;
