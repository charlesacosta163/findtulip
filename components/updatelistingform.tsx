'use client'
import React, { useState } from "react";
import { LuHousePlus, LuImage } from "react-icons/lu";
import { BsHouseCheck } from "react-icons/bs";
import { ListingSchema } from "@/lib/types";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";

const UpdateListingForm = ({listing}: {listing: any}) => {
   
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ListingSchema>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
    const onSubmit: SubmitHandler<ListingSchema> = async (data) => {
      setIsSubmitting(true);
  
      const { title, description, address, contactInfo, rent, numRooms, listingType } = data;
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: listing.id,
          title,
          description,
          address,
          contactInfo,
          rent: Number(rent),
          numRooms: Number(numRooms),
          listingType: listingType
        }),
      });
  
      setIsSubmitting(false);
      
      try {
        if (response.ok) {
          const payloadResponse = await response.json();
          setIsSuccess(true)
        } else {
          throw new Error("Failed to update listing");
        }
      } catch (error) {
        console.error("Submission failed", error);
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="self-center justify-center max-w-[600px] w-full flex flex-col gap-8 bg-white p-4 py-8 sm:p-8 rounded-lg shadow"
        method="post"
      >
        <header className="flex gap-2 text-gray-700 font-bold tracking-tight text-3xl">
          <LuHousePlus className="mt-1"/> Update {listing.title}
        </header>
  
        {/*  Title of Listing  */}
        <div
          id="input-field"
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor="title" className="text-xs font-semibold">
            Title
          </label>
          <input
            {...register("title", {
              required: true,
              minLength: {
                value: 10,
                message: "Title must be at least 10 characters",
              },
            })}
            defaultValue={listing.title}
            type="text"
            placeholder="Give a descriptive title of your listing"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium"
          />
        </div>
  
        {/*  Description of Listing  */}
        <div
          id="input-field"
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor="description" className="text-xs font-semibold">
            Description
          </label>
          <textarea
            {...register("description", {
              required: true,
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            defaultValue={listing.description}
            placeholder="Give a description of your listing"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium resize-none h-[150px]"
          />
        </div>

        {/* Type of Listing (Apartment or House) */}
        <div
          id="input-field"
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor="listing-type" className="text-xs font-semibold">
            Listing Type
          </label>
          <select
            {...register("listingType", { required: true })}
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium" 
            defaultValue={listing.listing_type.toLowerCase()}
          >
            <option value="">Select a listing type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>
  
        {/*  Address of Listing  */}
        <div
          id="input-field"
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor="address" className="text-xs font-semibold">
            Address
          </label>
          <input
            {...register("address", {
              required: true,
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters",
              },
            })}
            defaultValue={listing.address}
            type="text"
            placeholder="123 Fake St. Nowhereland, NJ 09901, United States"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium"
          />
        </div>
  
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div id="input-field" className="flex flex-col gap-1 flex-1">
            <label htmlFor="rent" className="text-xs font-semibold">
              Rent
            </label>
            <input
              {...register("rent", { required: true })}
              type="number"
              placeholder="e.g. 899"
              className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium"
              defaultValue={listing.rent}
            />
          </div>
  
          <div id="input-field" className="flex flex-col gap-1 flex-1">
            <label htmlFor="num-rooms" className="text-xs font-semibold">
              # of Rooms
            </label>
            <input
              {...register("numRooms", { required: true })}
              type="number"
              placeholder="e.g. 4"
              className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium"
              defaultValue={listing.num_rooms}
            />
          </div>
        </div>
  
        <div
          id="input-field"
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor="contactInfo" className="text-xs font-semibold">
            Contact Number
          </label>
          <input
            {...register("contactInfo", {
              required: true,
              minLength: {
                value: 10,
                message: "Contact Number must be at least 10 characters",
              },
            })}
            defaultValue={listing.contact_info}
            type="text"
            placeholder="e.g. 111-222-3333"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DDEB9D] bg-[#FAF6E9] text-sm font-medium"
          />
        </div>
  
        {Object.keys(errors).length > 0 && (
          <div className="font-medium flex flex-wrap gap-2">
            {errors.title?.type === "required" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Title is required
              </p>
            )}
            {errors.title?.type === "minLength" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                {errors.title.message}
              </p>
            )}
            {errors.description?.type === "required" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Description is required
              </p>
            )}
            {errors.description?.type === "minLength" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                {errors.description.message}
              </p>
            )}
            {errors.address?.type === "required" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Address is required
              </p>
            )}
            {errors.address?.type === "minLength" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                {errors.address.message}
              </p>
            )}
            {errors.rent && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Rent is required
              </p>
            )}
            {errors.numRooms && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Number of rooms is required
              </p>
            )}
            {errors.contactInfo?.type === "required" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                Contact number is required
              </p>
            )}
            {errors.contactInfo?.type === "minLength" && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-full text-xs font-medium">
                {errors.contactInfo.message}
              </p>
            )}
          </div>
        )}
  
        {isSuccess && (
          <div className="flex gap-1 items-center text-sm bg-blue-600 rounded-full text-white font-medium px-4 py-2 self-start">
            <BsHouseCheck /> Listing Updated Successfully! <Link href={`/listings/${listing.id}`} className="text-xs px-2 py-1 rounded-full bg-gray-700 text-white font-medium">View</Link>
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm self-start cursor-pointer"
        >
          {isSubmitting ? "Updating..." : "Update"}
        </button>
      </form>
    );
  };
export default UpdateListingForm