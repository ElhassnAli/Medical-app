import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { closeManu, openManu } from "../features/UiSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

export default function MainLayout() {
  const isOpen = useSelector((state) => state.isManuOpen.isOpen);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity || 0);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-[95%] pt-5 font-serif md:w-[75%]">
      <div className="flex flex-col items-center justify-between">
        <div className="flex w-full items-center justify-between md:flex-col md:items-center">
          <Header />
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" className="relative inline-flex">
              <IoCartOutline size={36} />
              {cartQuantity > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.65rem] font-semibold text-white">
                  {cartQuantity}
                </span>
              )}
            </Link>
            <button
              className="block"
              onClick={() => dispatch(isOpen ? closeManu() : openManu())}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <IoMdClose size={36} /> : <GiHamburgerMenu size={36} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm md:hidden"
            onClick={() => dispatch(closeManu())}
          />
        )}

        <div
          className={`fixed right-0 top-0 z-50 h-full w-[82%] max-w-[320px] bg-white p-5 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100"
              onClick={() => dispatch(closeManu())}
              aria-label="Close menu"
            >
              <IoMdClose size={28} />
            </button>
          </div>

          <div className="mt-6 flex flex-col items-end gap-5">
            <NavLinks className="items-end text-right text-[0.95rem]" />
            <SocialMediaLinks className="justify-end" />
          </div>
        </div>

        <div className="hidden w-full flex-row items-center justify-between gap-4 md:flex">
          <SocialMediaLinks className="flex" />
          <NavLinks />
          <div className="flex items-center gap-5">
            <Link to="/cart" className="relative inline-flex">
              <IoCartOutline size={40} />
              {cartQuantity > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.75rem] font-semibold text-white">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
}
