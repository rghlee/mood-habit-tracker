import React from "react";
import { View, Text, Button } from "react-native";

export default function EntryItem({ item, deleteEntry, editEntry }) {
  return (
    <View style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 5 }}>
      <Text>{item.date}</Text>
      <Text>Mood: {item.mood}</Text>
      <Text>Habit: {item.habit}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
        <Button title="Edit" onPress={() => editEntry(item.id)} />  
        <Button title="Delete" onPress={() => deleteEntry(item.id)} />
      </View>
    </View>
  );
}