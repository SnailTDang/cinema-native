import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseText from "../BaseText";

export default function Task(props) {
  const { todo } = props;
  return (
    <View>
      <BaseText>{todo.index}</BaseText>
      <BaseText>{todo.message}</BaseText>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBox: {
    // flexDirection: "column",
  },
});
