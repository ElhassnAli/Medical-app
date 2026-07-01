import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtswrkvtfitokvwqmbpt.supabase.co";
const supabasekey = import.meta.env.VITE_SupaBase_Key;
const supabase = createClient(supabaseUrl, supabasekey);
export default supabase;
