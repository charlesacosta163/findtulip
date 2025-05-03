"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGripLines } from "react-icons/fa6";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import Image from "next/image";
import { TbPencilSearch } from "react-icons/tb";
const MobileNav = ({
  avatar,
  username,
}: {
  avatar: string;
  username: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative block sm:hidden text-gray-700 cursor-pointer">
      <div className="flex gap-4 items-center">
        <Link
          href="/create"
          className="flex items-center gap-1 font-bold text-xs cursor-pointer bg-[#A0C878] hover:bg-green-600 text-white px-3 py-1 rounded-full"
        >
          <TbPencilSearch /> New Listing
        </Link>
        {isOpen ? (
          <FaTimes className="text-2xl" onClick={toggleMenu} />
        ) : (
          <FaGripLines className="text-2xl" onClick={toggleMenu} />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-12 right-0 w-[250px] text-sm font-medium  bg-[#FAF6E9] shadow-md rounded-lg p-4">
          <div className="flex gap-2 items-center">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full"
            />
            <span className="text-wrap font-bold">{username}</span>
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#e9e4d1] rounded-full"
          >
            <FaUserCircle className="text-lg" />
            Profile
          </Link>
          <Link
            href="/listings"
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#e9e4d1] rounded-full"
          >
            <FaRegRectangleList className="text-lg" />
              Listings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
