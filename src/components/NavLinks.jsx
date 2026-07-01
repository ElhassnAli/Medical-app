import { NavLink } from "react-router";

function NavLinks() {
  return (
    <nav className="text-3xl md:flex hidden justify-center gap-10 md:flex-row flex-col order-2 ">
      <NavLink
        to="/"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800 "
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800"
      >
        Products
      </NavLink>
      <NavLink
        to="/maintenance"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800"
      >
        Maintenance
      </NavLink>
      <NavLink
        to="/blog"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800 "
      >
        Blog
      </NavLink>
      <NavLink
        to="/gallery"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800"
      >
        Contact
      </NavLink>
      <NavLink
        to="/about-us"
        className="hover:text-cyan-400 border-b-2 border-b-transparent hover:border-b-gray-800"
      >
        About Us
      </NavLink>
    </nav>
  );
}

export default NavLinks;
