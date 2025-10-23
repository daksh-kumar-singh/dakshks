"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 hover:opacity-80 border"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      <span className="text-sm">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
