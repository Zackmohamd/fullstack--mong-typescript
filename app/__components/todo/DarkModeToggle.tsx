"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Markii page-ka furmo → akhri localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Markuu isbeddelo → kaydi
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex items-center gap-2 rounded-full
      bg-green-500 px-4 py-2 text-sm font-semibold text-white
      hover:bg-green-600 transition"
    >
      <span
        className={`text-lg transition-transform duration-300 ${
          dark ? "rotate-180 scale-110" : "rotate-0"
        }`}
      >
        {dark ? "☀️" : "🌙"}
      </span>
      {dark ? "Light" : "Dark"}
    </button>
  );
}
