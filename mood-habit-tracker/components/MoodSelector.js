import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MoodSelector({ setMood }) {

  const [selectedMood, setSelectedMood] = useState("");

  const handleSelect = (mood) => {
    setSelectedMood(mood);
    setMood(mood);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 5 }}>

      <TouchableOpacity
        onPress={() => handleSelect("Happy")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Happy" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😊 Happy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Neutral")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Neutral" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😐 Neutral</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Sad")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Sad" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😞 Sad</Text>
      </TouchableOpacity>

    </View>
  );
}