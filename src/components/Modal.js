import { useState } from "react";
import { Image, Modal, ScrollView, TextInput, View } from "react-native";
import { CustomBtn } from "./shared/CustomButton";
import { enteredTextDefault } from "../../App";

export const AddTodoModal = ({ visible, onClose, setListOfTodos }) => {
  const [enteredText, setEnteredText] = useState(enteredTextDefault);

  const handleAddTodo = () => {
    if (enteredText.trim() === "") return;
    setListOfTodos((perv) => {
      const id = new Date().getMilliseconds().toString();
      return [...perv, { text: enteredText, id }];
    });
    setEnteredText(enteredTextDefault);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
          width: "100%",
          paddingHorizontal: 10,
          backgroundColor: "#333d4f",
          flex: 1,
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/Images/checklist.png")}
        />
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              borderWidth: 2,
              paddingHorizontal: 5,
              borderColor: "#dddd",
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingVertical: 8,
              fontSize: 16,
            }}
            placeholder="Enter something to do"
            value={enteredText}
            onChangeText={setEnteredText}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <CustomBtn
            title="Add"
            onPress={handleAddTodo}
            styleBtn={{ backgroundColor: "#fabb7c", borderRadius: 3 }}
            styleText={{ color: "#fff" }}
          />
          <CustomBtn
            styleBtn={{ backgroundColor: "#e46574", borderRadius: 3 }}
            title="Clear"
            color={"red"}
            onPress={() => setEnteredText(enteredTextDefault)}
          />
          <CustomBtn
            title="close model"
            onPress={onClose}
            styleBtn={{ backgroundColor: "#806903", borderRadius: 3 }}
          />
        </View>
      </View>
    </Modal>
  );
};
