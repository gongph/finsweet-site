import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/themeSlice";
import { motion } from "framer-motion";

import { LuMoonStar, LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  // Set html theme class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Theme toggle
  function toggleTheme() {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  }

  return (
    <motion.div
      style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
      className="w-14 h-6 flex items-center justify-end px-2 py-3 rounded-full bg-slate-100 shadow-inner dark:bg-gray-dark/50 cursor-pointer"
      onTap={toggleTheme}
    >
      <motion.div layout className="size-5 flex items-center rounded-full">
        {theme === "dark" ? <LuMoonStar /> : <LuSunMoon />}
      </motion.div>
    </motion.div>
  );
}
