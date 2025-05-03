import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/supabase";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js 14 API!" });
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { user } = session;

  const body = await req.json();

  const { title, description, address, rent, numRooms, contactInfo, listingType } = body;
  
    // Step 3: Insert into listings table
    const { data, error } = await supabase
      .from('listings')
      .insert([
        {
          title,
          description,
          address,
          rent,
          num_rooms: numRooms,
          contact_info: contactInfo,
          username: user?.name,
          email: user?.email,
          listing_type: listingType
        }
      ])
      .select();
  
    if (error) {
      return NextResponse.json({ message: "Insert failed", error }, { status: 500 });
    }
  
    return NextResponse.json(
      { success: true, message: "Listing created successfully", listing: data[0] },
      { status: 201 }
    );
  }

export async function PUT(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { user } = session;
  const body = await req.json();

  const { id, title, description, address, rent, numRooms, contactInfo, listingType } = body;

  const { data, error } = await supabase
    .from('listings')
    .update({
      title,
      description,
      address,
      rent,
      num_rooms: numRooms,
      contact_info: contactInfo,
      listing_type: listingType
    })
    .eq('id', id)
    .eq('username', user?.name)
    .eq('email', user?.email)
    .select();
  
  if (error) {
    return NextResponse.json({ message: "Update failed", error }, { status: 500 });
  }

  revalidatePath('/listings')

  return NextResponse.json({ success: true, message: "Listing updated successfully", listing: data[0] }, { status: 200 });
  
}