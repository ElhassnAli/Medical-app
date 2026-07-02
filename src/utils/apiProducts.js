import supabase from "../services/supabase";

async function apiProducts() {
  const data = await supabase.from("products").select("*");
  return data;
}
export default apiProducts;
