import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

function NavBar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center ">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="cursor-pointer">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold "> News</h2>
            </div>
          </Link>

          <div className="items-center justify-center space-y-8 flex space-x-6 ">
            {currentTheme === "dark" ? (
              <button
                onClick={() => {
                  setTheme("light");
                }}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
