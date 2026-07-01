import { Outlet } from "react-router";
import Header from "./Header";
import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

export default function MainLayout() {
  return (
    <div className="md:w-[75%] w-[95%] mx-auto pt-5  font-serif ">
      <div className="md:flex-col items-center justify-between flex">
        <Header />
        <div className="flex  md:flex-row flex-col md:w-full justify-between items-center">
          <SocialMediaLinks />

          <NavLinks />
          <div className="flex gap-5 cursor-pointer md:order-3 order-1">
            <IoCartOutline size={40} />
            <div className="md:hidden block">
              <GiHamburgerMenu size={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
