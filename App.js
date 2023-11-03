import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CustomList } from "./src/components/List";
import { CustomBtn } from "./src/components/shared/CustomButton";
import { AddTodoModal } from "./src/components/Modal";
import { StatusBar } from "expo-status-bar";

//default values
export const enteredTextDefault = "";
const listOfTodosDefault = [];

export default function App() {
  const [listOfTodos, setListOfTodos] = useState(listOfTodosDefault);
  const [modalToggle, setModalToggle] = useState(false);

  const handleRemoveItem = (id) => {
    setListOfTodos((pervState) => pervState.filter((todo) => +todo.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <CustomBtn
            title="Add Todo"
            onPress={() => setModalToggle(true)}
            styleBtn={{ backgroundColor: "#fabb7c" }}
            styleText={{ color: "#000", fontWeight: "bold" }}
          />
        </View>
        <AddTodoModal
          visible={modalToggle}
          onClose={() => setModalToggle(false)}
          setListOfTodos={setListOfTodos}
        />
        <View
          style={{
            flex: 4,
            alignSelf: "flex-start",
            columnGap: 5,
            width: "100%",
          }}
        >
          <CustomList items={listOfTodos} handleRemoveItem={handleRemoveItem} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333d4f",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    paddingTop: 10,
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
