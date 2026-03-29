import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MoodSelector({ setMood }) {

  const [selectedMood, setSelectedMood] = useState("");

  const handleSelect = (mood) => {
    setSelectedMood(mood);
    setMood(mood);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 5, padding:5, marginVertical: 10, flexWrap: "wrap"}}>

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
        onPress={() => handleSelect("Confused")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Confused" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>🤔 Confused</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Loving")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Loving" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text> 💖 Loving</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Annoyed")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Annoyed" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text> 😒 Annoyed</Text>
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
        onPress={() => handleSelect("Embarrased")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Embarrassed" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😳 Embarrassed</Text>
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

      <TouchableOpacity
        onPress={() => handleSelect("Confident")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Confident" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😎 Confident</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Overwhelmed")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Overwhelmed" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😰 Overwhelmed</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => handleSelect("Frustrated")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Frustrated" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text>😤 Frustrated</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Unwell")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Unwell" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text> 🤢Unwell</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelect("Heated")}
        style={{
          padding: 10,
          borderRadius: 8,
          backgroundColor: selectedMood === "Heated" ? "#90CAF9" : "#E0E0E0"
        }}
      >
        <Text> 😡 Heated</Text>
      </TouchableOpacity>

    </View>
  );
}