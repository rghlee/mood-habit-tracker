import React from "react";
import { View, Button } from "react-native";

export default function MoodSelector({ setMood }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
      <Button title="😊 Happy" onPress={() => setMood("Happy")} />
      <Button title="😐 Neutral" onPress={() => setMood("Neutral")} />
      <Button title="😞 Sad" onPress={() => setMood("Sad")} />
    </View>
  );
}