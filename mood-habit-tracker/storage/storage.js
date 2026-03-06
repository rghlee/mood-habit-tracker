import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "MOOD_ENTRIES";

export const saveEntries = async (entries) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.log("Error saving entries", e);
  }
};

export const loadEntries = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("Error loading entries", e);
    return [];
  }
};