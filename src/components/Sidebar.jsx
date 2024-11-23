import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Sidebar({ expand, menus }) {
  // Active link
  const linkClass = "hover:text-brandOrange transition-colors";
  const activeLinkClass = "text-brandOrange";
  // Sidebar classes
  const defaultClass = "sidebar-menu";
  const expandClass = "sidebar-menu expanded";

  // Effect event
  const effectEvent = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (expand) {
      document.body.addEventListener("touchmove", effectEvent, {
        passive: false,
      });
    }
    return () => {
      document.body.removeEventListener("touchmove", effectEvent, {
        passive: false,
      });
    };
  }, [expand]);

  return (
    <div className={expand ? expandClass : defaultClass}>
      <div className="sidebar-content bg-white dark:bg-brand-dark float-end rounded-tl-xl rounded-bl-xl mt-0.5">
        <nav className="flex flex-col items-center gap-y-4 text-gay-700 dark:text-slate-300 font-medium my-5 mx-8">
          {menus.map((link) => {
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
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  expand: PropTypes.bool,
  menus: PropTypes.array,
};
