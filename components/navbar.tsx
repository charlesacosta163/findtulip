import React from "react";
import tulipLogo from "@/public/images/tulip-flower-svgrepo-com.svg";
import Image from "next/image";
import { TbPencilSearch } from "react-icons/tb";
import { FaRegRectangleList } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Navbar = ({ avatar, username }: { avatar: string; username: string }) => {
  return (
    <header>
      <nav className="flex justify-between gap-4 items-center p-4">
        <Link href="/" id="logo" className="flex gap-2 items-center">
          <Image src={tulipLogo} width={20} height={20} alt="tulip logo" />
          <span className="text-xl font-bold tracking-tight text-gray-700">
            Find<span className="text-red-400">Tulip</span>
          </span>
        </Link>

        <div id="links" className="hidden sm:flex gap-4 items-center">
          <Link
            href="/listings"
            className="font-medium text-sm cursor-pointer flex items-center gap-2"
          >
            <FaRegRectangleList /> Listings
          </Link>
          <Link
            href="/create"
            className="flex items-center gap-1 font-bold text-sm cursor-pointer bg-[#A0C878] hover:bg-green-600 text-white px-3 py-1 rounded-full"
          >
            <TbPencilSearch /> New Listing
          </Link>
          {avatar && username ? (
            <Link href="/profile">
              <Image
                src={avatar}
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full duration-300 cursor-pointer border-2 border-[#DDEB9D] hover:border-[#A0C878] shadow-md"
              />
            </Link>
          ) : (
            <Link
              href="/signin"
              className="flex items-center gap-2 px-3 py-1 hover:bg-[#e9e4d1] text-sm font-medium rounded-full"
            >
              <LuLogIn className="text-lg" />
              Sign in
            </Link>
          )}
        </div>

        <MobileNav avatar={avatar} username={username} />
      </nav>
    </header>
  );
};

export default Navbar;
