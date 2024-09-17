import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function signupWithGoogleFunc() {
    const supabase = createBrowserSupabaseClient()

    return await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: process.env.NEXT_SUPABASE_REDIRECT_TO!
        }
    })
    
}