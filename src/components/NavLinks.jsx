import { NavLink } from "react-router";

function NavLinks() {
  return (
    <nav className="text-3xl flex justify-center gap-10 md:mb-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/maintenance">Maintenance</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
    </nav>
  );
}

export default NavLinks;
