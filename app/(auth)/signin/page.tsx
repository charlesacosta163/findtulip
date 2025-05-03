import React from "react";
import tulipLogo from "@/public/images/tulip-flower-svgrepo-com.svg";
import Image from "next/image";
import { RiDiscordLine } from "react-icons/ri";
import apartmentImg from '@/public/images/undraw_apartment-rent_oodr.svg'

import { signInWithDiscord } from "@/lib/actions"

const LoginPage = () => {
  return (
    <section className="max-w-[600px] w-full rounded-lg flex justify-center sm:justify-between items-center bg-[#FAF6E9] py-8 px-8 sm:px-16 text-gray-700">

        <div className="hidden sm:flex flex-col gap-4">
            <Image src={apartmentImg} alt="apartment" width={200} height={200}/>
        </div>

        <div className=" flex flex-col items-center gap-4">
            <header className="flex flex-col gap-2 items-center">
                <div id="logo" className="flex gap-2 items-center">
                    <Image src={tulipLogo} width={20} height={20} alt="tulip logo" />
                    <span className="text-2xl font-bold tracking-tight">
                    Find<span className="text-red-400">Tulip</span>
                    </span>
                </div>
                <p className="text-sm font-medium text-gray-500">Your housing needs, sorted.</p>
            </header>
            
            <form action={signInWithDiscord}>
                <button className="flex items-center gap-2 bg-[#A0C878] duration-300 hover:bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                    <RiDiscordLine />
                    Continue with Discord
                </button>
            </form>
        </div>
    </section>
  );
};

export default LoginPage;
