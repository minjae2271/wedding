import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function SigninFunc(email: string, password: string) {
    const supabase = createBrowserSupabaseClient()

    return await supabase.auth.signInWithPassword({
        email,
        password,
    })
}