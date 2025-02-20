import React from "react";
import SecondScreen from "../src/pages/SecondScreen";
import ThemeContextProvider from "../src/contexts/ThemeContext";

export default function secondscreen() {
  
  return (
    <ThemeContextProvider>
      <SecondScreen />
    </ThemeContextProvider>
      
  );
}