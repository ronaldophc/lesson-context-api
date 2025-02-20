import React from "react";
import { Slot } from "expo-router";
import ThemeContextProvider from "../src/contexts/ThemeContext";

export default function Layout() {
  return (
    <ThemeContextProvider>
      <Slot />
    </ThemeContextProvider>
  );
}