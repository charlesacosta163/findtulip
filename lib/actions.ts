'use server'

import { supabase } from "./supabase/supabase";
import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
export async function signInWithDiscord() {
  const session = await auth();
  let response;

  if (session) redirect("/");
  else response = await signIn("discord", { redirectTo: "/" });
}

export async function signOutFromDiscord() {
    await signOut({redirectTo: "/signin"});
}

export async function getAllListings(filter?: string) {
  
  if (filter) {
    let { data: listings, error } = await supabase
    .from('listings')
    .select('*')
    .eq('listing_type', filter)

    return listings
  }
    let { data: listings, error } = await supabase
    .from('listings')
    .select('*')

    return listings
}

export async function getListingsByUser(email: string) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
    let { data: userListings, error } = await supabase
    .from('listings')
    .select('*')
    .eq('email', email)

    return userListings
}
export async function getAListing(id: number) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
    let { data: listing, error } = await supabase
    .from('listings')
    .select('*')
    .eq("id", id)

    return listing
}

export async function deleteListing(formData: FormData) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
   
   const id = formData.get("id");
    let { data: listing, error } = await supabase
    .from('listings')
    .delete()
    .eq("id", id)

    revalidatePath("/profile");
}