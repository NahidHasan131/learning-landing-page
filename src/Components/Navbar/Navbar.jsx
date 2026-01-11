import { useState } from "react";
import { IoMdMenu ,IoMdClose} from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  const [isNavbarMenu, setIsNavbarMenu] = useState(false);
  const toggleMenu = () => setIsNavbarMenu(!isNavbarMenu);

  return(
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/10">
        <div className="container py-10 flex justify-between items-center relative">
          <div>
            <h1 className="font-bold text-2xl">Wind Coder</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="inline-block py-2 px-3 hover:text-secondary relative group">
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Sign In</button>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isNavbarMenu ? <IoMdClose className="w-6 h-6"/> : <IoMdMenu className="w-6 h-6"/>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu*/}
        {isNavbarMenu && (
          <div className="w-full shadow-md lg:hidden">
            <ul className="flex flex-col gap-2 py-2 items-center">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="w-full text-center py-2">
                  <a href={item.link}  className="inline-block relative group py-2 px-3 hover:text-secondary">
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 hidden group-hover:block"></div>
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <button className="primary-btn w-40">Sign In</button>
              </li>
            </ul>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
