import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { Adapter } from "next-auth/adapters"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord({
    clientId: process.env.DISCORD_CLIENT_ID as string,
    clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
  })],
})