"use client";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { RiMoonFill } from "react-icons/ri";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [themeNow, setThemeNow] = useState("light");

  useEffect(() => {
    if (theme) {
      setThemeNow(theme);
    }
  }, [theme]);

  return (
    <div>
      <Button
        disableRipple
        variant="light"
        radius="full"
        isIconOnly
        onClick={
          theme === "light" ? () => setTheme("dark") : () => setTheme("light")
        }
        className={` flex justify-center items-center`}
      >
        {themeNow === "light" ? (
          <span className="text-yellow-400 text-xl">
            <RiMoonFill />
          </span>
        ) : (
          <span className="text-yellow-400 text-xl">
            <ImSun />
          </span>
        )}
      </Button>
    </div>
  );
}
