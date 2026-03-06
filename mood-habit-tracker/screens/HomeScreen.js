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
  const [editingId, setEditingId] = useState(null); //Edit functionality

  useEffect(() => {
    loadEntries().then(data => setEntries(data));
  }, []);

  const addEntry = () => {
    if (!mood && !habit) return;

    if (editingId) {
      //Edit functionality
      const updatedEntries = entries.map(entry =>
        entry.id === editingId ? { ...entry, mood, habit } : entry
      );
      setEntries(updatedEntries);
      saveEntries(updatedEntries);
      setEditingId(null);
    } else {
      //New entry
      const newEntry = {
        id: Date.now().toString(),
        mood,
        habit,
        date: new Date().toLocaleDateString(),
      };
      const updated = [...entries, newEntry];
      setEntries(updated);
      saveEntries(updated);
    }

    setMood("");
    setHabit("");
  };

  //Delete entry
  const deleteEntry = (id) => {
    const filtered = entries.filter(item => item.id !== id);
    setEntries(filtered);
    saveEntries(filtered);
  };

  //Edit functionality
  const editEntry = (id) => {
    const entry = entries.find(item => item.id === id);
    if (entry) {
      setMood(entry.mood);
      setHabit(entry.habit);
      setEditingId(id);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#4A90E2", marginBottom: 10 }}>
        Mood Habit Tracker
      </Text>

       <MoodSelector mood={mood} setMood={setMood} />

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <TextInput
          placeholder="What did you do today? Enter habit."
          placeholderTextColor="#33333374"
          value={habit}
          onChangeText={setHabit}
          multiline={true}
          textAlignVertical="top"
          style={{
            borderWidth: 2,
            borderColor: "#83838391",
            backgroundColor: "#ffffff",
            borderRadius: 6,
            padding: 5,
            width: 500,
            height: 100
          }}
        />
      </View>

      <Button title={editingId ? "Update Entry" : "Add Entry"} onPress={addEntry} />

      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EntryItem item={item} deleteEntry={deleteEntry} editEntry={editEntry} />
        )}
        style={{ marginVertical: 10 }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Go to Dashboard" onPress={() => router.push("/dashboard")} />
        <Button title="Settings" onPress={() => router.push("/settings")} />
      </View>
    </View>
  );
}
