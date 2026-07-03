import Logo from "./Logo";
function Header() {
  return (
    <header className="flex justify-center items-center md:text-6xl text-4xl md:mb-20 bg-linear-to-r from-teal-800 to-emerald-500 font-medium bg-clip-text text-transparent">
      <Logo
        className={
          "md:w-150 w-40 text-blue-500 hover:text-cyan-600 transition-colors h-auto"
        }
        fill="#13c2c2"
      />
    </header>
  );
}

export default Header;
