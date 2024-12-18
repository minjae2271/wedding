import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function signupWithGoogleFunc() {
    const supabase = createBrowserSupabaseClient()

    return await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_TO
        }
    })
    
}