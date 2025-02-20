import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import ChangeTheme from "./ChangeTheme";
import { router } from 'expo-router'

export default function SecondScreen() {
  const theme = useThemeContext();

  
  return (
      <View style={[styles.container, { backgroundColor: theme.theme.backgroundColor }]}>
        <Text style={[styles.text, { color: theme.theme.color }]}>
        Second Screen - Theme Context: {theme.light ? 'light' : 'dark'}
        </Text>
        <ChangeTheme />
        <Pressable onPress={() => {router.push("/")}}>
            <Text >Go to Home</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
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