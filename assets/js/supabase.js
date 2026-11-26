// Division's browser-safe Supabase client. The publishable key is intended for public clients;
// access is controlled by Supabase Auth and row-level security policies.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

export const SUPABASE_URL = "https://abjiexysxihygcbjfkok.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2xLD_b2JsOtt1BR4h_vD_Q_VrOqKxXr";
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
