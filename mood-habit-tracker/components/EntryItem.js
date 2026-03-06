import React from "react";
import { View, Text, Button } from "react-native";

export default function EntryItem({ item, deleteEntry }) {
  return (
    <View style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 5 }}>
      <Text>{item.date}</Text>
      <Text>Mood: {item.mood}</Text>
      <Text>Habit: {item.habit}</Text>
      <Button title="Delete" onPress={() => deleteEntry(item.id)} />
    </View>
  );
}