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

export async function getAllListings() {
    let { data: listings, error } = await supabase
    .from('listings')
    .select('*')

    return listings
}

export async function getListingsByUser(email: string) {
    let { data: userListings, error } = await supabase
    .from('listings')
    .select('*')
    .eq('email', email)

    return userListings
}
export async function getAListing(id: number) {
    let { data: listing, error } = await supabase
    .from('listings')
    .select('*')
    .eq("id", id)

    return listing
}

export async function deleteListing(formData: FormData) {
   const id = formData.get("id");
    let { data: listing, error } = await supabase
    .from('listings')
    .delete()
    .eq("id", id)

    revalidatePath("/profile");
}