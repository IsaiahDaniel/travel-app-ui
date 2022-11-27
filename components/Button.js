import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import React from "react";

export default function Button({ text, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={{ textAlign: "center", color: "white" }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
  },
});
