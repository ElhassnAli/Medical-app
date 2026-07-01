import { useEffect } from "react";
import supabase from "../services/supabase";

function HomePage() {
  useEffect(() => {
    async function getDta() {
      const data = await supabase.from("products").select("*");
      console.log(data);
    }
    // getDta();
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
