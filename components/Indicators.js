import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import React from "react";

export default function Indicators() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.indicatorActive}></View>
      <View style={styles.indicator}></View>
      <View style={styles.indicator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 50,
    marginRight: 10,
    height: 8,
    width: 8,
  },
  indicatorActive: {
    backgroundColor: COLORS.primary,
    marginRight: 10,
    height: 8,
    width: 30,
    borderRadius: 50,
  },
});
