import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function signupFunc(email: string, password: string) {
    const supabase = createBrowserSupabaseClient()

    return await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: process.env.NEXT_SUPABASE_EMAIL_REDIRECT_TO
        }
    })
    
}