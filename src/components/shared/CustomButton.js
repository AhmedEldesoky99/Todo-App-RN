import { Pressable, StyleSheet, Text } from "react-native";

export const CustomBtn = ({ onPress, title, styleText, styleBtn }) => {
  return (
    <Pressable onPress={onPress} style={{ ...styles.btn, ...styleBtn }}>
      <Text style={{ ...styles.text, ...styleText }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#eee",
    fontWeight: "600",
    fontSize: 15,
  },
  btn: {
    backgroundColor: "green",
    maxWidth: "100%",
    minWidth: 100,
    borderRadius: 3,
    display: "flex",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
