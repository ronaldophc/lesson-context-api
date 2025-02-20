import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ChangeTheme() {
  const theme = useThemeContext();

  const changeTheme = () => {
    theme.setLight();
  };
  
  return (
      <Pressable onPress={changeTheme} style={[styles.button, { backgroundColor: theme.theme.buttonColor }]}>
        <Text style={{ color: theme.theme.backgroundColor }}>Toggle Theme</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
    },
});