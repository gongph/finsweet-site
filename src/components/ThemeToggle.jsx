import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { LuMoonStar, LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    setHtmlTheme(theme);
  }, [theme]);

  function setHtmlTheme(theme) {
    localStorage.theme = theme;
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark"
    );
  }

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <motion.div
      style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
      className="w-14 h-6 flex items-center justify-end px-2 py-3 rounded-full bg-slate-200 dark:bg-gray-dark cursor-pointer"
      onTap={handleClick}
    >
      <motion.div layout className="size-5 flex items-center rounded-full">
        {theme === "dark" ? <LuMoonStar /> : <LuSunMoon />}
      </motion.div>
    </motion.div>
  );
}
