// components/ThemeToggle.js
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggle = ({ active }: { active: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="text-[#6A707E]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <IoMoonOutline
          className={`${
            active ? "xl:text-lg" : "xl:text-xl"
          } text-2xl  transition-all min-w-fit  hover:scale-125`}
        />
      ) : (
        <CiLight
          className={`${
            active ? "xl:text-lg" : "xl:text-xl"
          } text-2xl transition-all min-w-fit hover:scale-125`}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
