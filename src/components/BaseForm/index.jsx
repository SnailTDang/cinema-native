import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import React, { useRef, useState } from "react";

export default function BaseForm(props) {
  const { handleSubmit } = props;
  const [text, setText] = useState("");
  const handleInput = (value) => {
    setText(value);
  };

  const handleForm = () => {
    if (!text) {
      alert("You not enter Task");
    } else {
      handleSubmit(text);
      setText("");
    }
  };

  return (
    <View style={styles.box}>
      <View style={styles.boxTextInput}>
        <TextInput
          value={text}
          style={styles.textInput}
          type={"text"}
          placeholder={"Enter your message!"}
          onChangeText={(text) => handleInput(text)}
        />
      </View>
      <View style={styles.boxButton}>
        <Button style={styles.button} title="+" onPress={handleForm}></Button>
      </View>
      {/* <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxTextInput: {
    flex: 9,
  },
  textInput: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  boxButton: {
    flex: 1,
    paddingRight: 20,
  },
  button: {
    backgroundColor: "#c3c3c6",
    height: "100%",
  },
});
