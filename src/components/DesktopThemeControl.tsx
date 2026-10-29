"use client";

import { useEffect, useRef } from "react";

type ThemePreference = "system" | "light" | "dark";

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function DesktopThemeControl() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const select = selectRef.current;
    if (!select) return;

    const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (preference: ThemePreference) => {
      document.documentElement.dataset.abboDesktopTheme =
        preference === "system"
          ? colorPreference.matches
            ? "dark"
            : "light"
          : preference;
    };

    const storedPreference = window.localStorage.getItem("abboDesktopTheme");
    if (storedPreference && isThemePreference(storedPreference)) {
      select.value = storedPreference;
    }

    const syncTheme = () => {
      const preference = select.value;
      applyTheme(isThemePreference(preference) ? preference : "system");
    };

    syncTheme();
    colorPreference.addEventListener("change", syncTheme);

    return () => colorPreference.removeEventListener("change", syncTheme);
  }, []);

  return (
    <aside className="abbo-theme-preview" aria-label="Desktop appearance">
      <label htmlFor="abbo-theme-choice">Appearance</label>
      <select
        id="abbo-theme-choice"
        ref={selectRef}
        defaultValue="system"
        onChange={(event) => {
          const preference = event.currentTarget.value;
          if (!isThemePreference(preference)) return;
          window.localStorage.setItem("abboDesktopTheme", preference);
          const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
          document.documentElement.dataset.abboDesktopTheme =
            preference === "system"
              ? colorPreference.matches
                ? "dark"
                : "light"
              : preference;
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </aside>
  );
}
