import { Outlet } from "react-router";
import Header from "./Header";
import NavLinks from "./NavLinks";

export default function MainLayout() {
  return (
    <div className="md:w-[80%] w-[95%] mx-auto pt-5  font-serif ">
      <Header />
      <NavLinks />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
