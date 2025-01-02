import { useEffect, useState } from "react";

const ThemeToggle = () => {
  // State for the current theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      localStorage.setItem("theme", defaultTheme);
      return defaultTheme;
    }
  });

  // Update the theme in localStorage and on the <html> element
  const updateTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
  };

  // Handle system theme changes
  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      const prefersDark = e.matches;
      if (!localStorage.getItem("theme")) {
        const newTheme = prefersDark ? "dark" : "light";
        updateTheme(newTheme);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Apply the initial theme when the component mounts
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <li className="theme-switcher-wrapper nav-item">
      <input
        type="checkbox"
        id="theme-switcher"
        // checked={theme === "dark"}
        checked
        onChange={() => updateTheme(theme === "dark" ? "light" : "dark")}
      />
      <label htmlFor="theme-switcher">
        <div className={`box ${theme === "dark" ? "dark" : "light"} `}>
          <div className="ball"></div>
          <div className="icons">
            <i
              className="feather icon-sun"
              data-feather="sun"
              style={{ height: "16px", width: "16px" }}
            ></i>
            <i
              className="feather icon-moon text-black"
              data-feather="moon"
              style={{ height: "16px", width: "16px" }}
            ></i>
          </div>
        </div>
      </label>
    </li>
  );
};

export default ThemeToggle;
