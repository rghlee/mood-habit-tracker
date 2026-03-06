import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { loadEntries } from "../storage/storage";

export default function DashboardScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries().then(data => setEntries(data));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
      <Text>Total Entries: {entries.length}</Text>
    </View>
  );
}