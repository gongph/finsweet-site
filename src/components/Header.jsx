import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoDark from "@/assets/logo.svg";
import logoLight from "@/assets/logo-white.svg";
import Hamburger from "./Hamburger";
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";
import { getMenus } from "@/api/menu";

export default function Header() {
  // Active class
  const linkClass = "hover:text-brandOrange transition-colors hidden md:block";
  const activeLinkClass = `${linkClass} text-brandOrange`;
  const links = getMenus(); // Get menu links
  const [expand, setExpand] = useState(false); // Add state to track expand
  const theme = useSelector((state) => state.theme.value);

  // Scroll to top when the page loads
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Toggle expand state when hamburger is clicked
  const handleHamburgerClick = () => {
    setExpand(!expand);
  };

  return (
    <>
      {/* header */}
      <div className="sticky top-0 z-50 bg-[#fff]/50 shadow-sm backdrop-blur dark:bg-brand-dark/30 dark:text-gray-light">
        <div className="container-fluid px-4 md:px-0 mx-auto h-16 md:h-20 flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img
                src={theme === "light" ? logoDark : logoLight}
                alt="logo"
                className="shrink-0 w-24 md:w-28"
              />
            </Link>
          </div>
          <nav className="flex items-center gap-x-6 text-gay-700 dark:text-slate-300 font-medium">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.route ? link.route : "#"}
                  key={link.id}
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : linkClass
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
            <ThemeToggle />
            {/* <button className="hidden md:block text-brandOrange px-4 py-2 rounded-full bg-brandOrange/10 hover:bg-brandOrange/15 transition-colors">
            Clone Project
          </button> */}
            <Hamburger expand={expand} onClick={handleHamburgerClick} />
          </nav>
        </div>
      </div>
      {/* sidebar */}
      <Sidebar expand={expand} menus={links} />
    </>
  );
}
