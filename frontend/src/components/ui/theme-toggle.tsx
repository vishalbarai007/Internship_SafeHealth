import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./switch";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 dark:text-gray-400" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-700"
      />
      <Moon className="h-4 w-4 dark:text-gray-400" />
    </div>
  );
}