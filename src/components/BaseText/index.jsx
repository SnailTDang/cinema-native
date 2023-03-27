import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BaseText(props) {
  const { text, style, children } = props;
  return (
    <View>
      <Text style={style}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // textStyle: {
  //   Color: 'red'
  // }
});
