import { Pressable, Text, View } from "react-native";

export const ListItem = ({ index, item, handleRemoveItem }) => {
  return (
    <View
      style={{
        backgroundColor: "#2f6f73",
        borderRadius: 5,
        marginBottom: 10,
      }}
    >
      <Pressable
        android_ripple={{ color: "#e46574" }}
        onPress={() => handleRemoveItem(+item.id)}
        style={({ pressed }) => pressed && { backgroundColor: "#e46574" }}
      >
        <Text
          style={{
            color: "#eee",
            fontSize: 18,
            fontWeight: "600",
            padding: 15,
          }}
        >{`${index + 1}) ${item.text}`}</Text>
      </Pressable>
    </View>
  );
};
