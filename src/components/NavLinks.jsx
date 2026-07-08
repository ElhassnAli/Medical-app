import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeManu } from "../features/UiSlice";

function NavLinks({ className = "" }) {
  const dispatch = useDispatch();
  const linkClassName =
    "w-fit border-b-2 border-b-transparent px-2 py-1 transition-all duration-200 hover:bg-cyan-50 hover:text-cyan-600";

  return (
    <nav
      className={`flex flex-col items-end justify-center gap-2 text-[0.95rem] font-medium text-slate-700 md:flex md:flex-row md:items-center md:gap-10 md:text-3xl md:text-slate-800 ${className}`}
    >
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/"
        className={linkClassName}
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/products"
        className={linkClassName}
      >
        Products
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/maintenance"
        className={linkClassName}
      >
        Maintenance
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/blog"
        className={linkClassName}
      >
        Blog
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/gallery"
        className={linkClassName}
      >
        Gallery
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/contact"
        className={linkClassName}
      >
        Contact
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeManu())}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid black" : "2px solid transparent",
          borderColor: isActive ? "black" : "transparent",
        })}
        to="/about-us"
        className={linkClassName}
      >
        About Us
      </NavLink>
    </nav>
  );
}

export default NavLinks;
