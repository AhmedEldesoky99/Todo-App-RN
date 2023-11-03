import { FlatList } from "react-native";
import { ListItem } from "./ListItem";

export const CustomList = ({ items, handleRemoveItem }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ index, item }) => (
        <ListItem
          index={index}
          item={item}
          handleRemoveItem={handleRemoveItem}
        />
      )}
    />
  );
};
