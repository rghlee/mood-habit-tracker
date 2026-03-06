import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";

import MoodSelector from "../components/MoodSelector";
import EntryItem from "../components/EntryItem";
import { saveEntries, loadEntries } from "../storage/storage";

export default function HomeScreen() {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [habit, setHabit] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries().then(data => setEntries(data));
  }, []);

  const addEntry = () => {
    if (!mood && !habit) return;

    const newEntry = {
      id: Date.now().toString(),
      mood,
      habit,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...entries, newEntry];
    setEntries(updated);
    saveEntries(updated);
    setMood("");
    setHabit("");
  };

  const deleteEntry = (id) => {
    const filtered = entries.filter(item => item.id !== id);
    setEntries(filtered);
    saveEntries(filtered);
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Mood Habit Tracker
      </Text>

      <MoodSelector setMood={setMood} />

      <TextInput
        placeholder="Enter Habit"
        value={habit}
        onChangeText={setHabit}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 10 }}
      />

      <Button title="Add Entry" onPress={addEntry} />

      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EntryItem item={item} deleteEntry={deleteEntry} />}
        style={{ marginVertical: 10 }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Go to Dashboard" onPress={() => router.push("/dashboard")} />
        <Button title="Settings" onPress={() => router.push("/settings")} />
      </View>
    </View>
  );
}