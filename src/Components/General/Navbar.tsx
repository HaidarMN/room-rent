import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "" },
    { label: "About Us", link: "about-us" },
    { label: "Contact Us", link: "contact-us" },
  ];

  return (
    <nav className="w-full bg-white py-6 shadow-md">
      <div className="container flex flex-row items-center justify-between gap-10">
        <NavLink to="/">
          <h1 className="text-4xl font-bold text-primary">RoomRent</h1>
        </NavLink>

        <div className="flex flex-row items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `text-lg font-medium transition-all hover:text-primary ${isActive && "text-primary"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
