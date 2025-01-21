import { useState } from "react";
import { NavLink, Link } from "react-router";

import { Icon } from "@iconify/react";

const Navbar = () => {
  const menuItems = [
    { label: "Home", link: "" },
    { label: "About Us", link: "about-us" },
    { label: "Contact Us", link: "contact-us" },
  ];

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={`sticky top-0 w-full bg-white py-6 ${isScrolled && "shadow-md"}`}
    >
      <div className="container flex flex-row items-center justify-between gap-10">
        <Link to="/">
          <h1 className="text-4xl font-bold text-primary">RoomRent</h1>
        </Link>

        <div className="hidden flex-row items-center gap-10 lg:flex">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `text-lg font-medium transition-all hover:text-primary ${isActive && "text-primary"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button className="text-4xl lg:hidden" onClick={openSidebar}>
          <Icon icon="material-symbols:menu-rounded" />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 transition-all duration-300 lg:hidden"
          onClick={openSidebar}
        ></div>
      )}

      <aside
        className={`fixed inset-0 z-20 flex min-h-screen w-64 flex-col gap-6 bg-white px-4 py-6 transition-all duration-300 lg:-translate-x-full ${!isSidebarOpen && "-translate-x-full"}`}
      >
        <Link to="/" onClick={openSidebar}>
          <h1 className="text-4xl font-bold text-primary">RoomRent</h1>
        </Link>

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `font-medium transition-all hover:text-primary ${isActive && "text-primary"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </aside>
    </nav>
  );
};

export default Navbar;
