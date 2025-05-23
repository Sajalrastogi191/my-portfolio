
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Update DOM and localStorage
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Toggle 
      pressed={isDarkMode} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Toggle>
  );
};

export default ThemeSwitcher;
