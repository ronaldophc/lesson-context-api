import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import ChangeTheme from "./ChangeTheme";
import { router } from 'expo-router'

export default function Home() {
  const theme = useThemeContext();

  
  return (
    <>
        <View style={[styles.container, { backgroundColor: theme.theme.backgroundColor }]}>
            <Text style={[styles.text, { color: theme.theme.color }]}>
                Home - Theme Context: {theme.light ? 'light' : 'dark'}
            </Text>
            <ChangeTheme />
            <Pressable onPress={() => {router.push("/secondscreen")}}>
                <Text style={{ color: theme.theme.color }}>Go to Second Screen</Text>
            </Pressable>
        </View>
        
    </>
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