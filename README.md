## Mood and Habit Tracker Mobile App ## - Developed as part of a React Native mobile development course project

# Overview

The Mood and Habit Tracker is a simple React Native mobile application designed to help users monitor their daily moods and track basic habits. The application allows users to create, view, and delete mood entries while storing the data locally on the device. This project demonstrates core concepts in mobile application development using React Native, including component-based design, navigation between screens, persistent data storage, and CRUD operations.

The application was designed with simplicity in mind so that users can quickly record their emotional state and habit completion without requiring an account or internet connection. All data is stored locally using Async Storage, making the application lightweight and privacy-conscious.

---

# Key Features

# 1. Mood Logging

Users can select their current mood using simple emoji-based options and optionally add a short note describing their day. This allows users to reflect on their emotional state and record daily experiences.

# 2. Habit Tracking

The application allows users to track whether a habit has been completed for the day. Habit completion is stored along with the mood entry to help users monitor daily routines.

# 3. Entry Dashboard

All saved entries can be viewed on the Dashboard screen. Users can review previously recorded moods and notes in a chronological list.

# 4. Data Management (CRUD Operations)

The application supports basic data management operations:

*Create* – Add a new mood entry
*Read* – View stored entries on the dashboard
*Update* – Modify existing entries (optional enhancement)
*Delete* – Remove entries from the list

# 5. Persistent Storage

The application uses Async Storage to ensure that entries remain saved even after the application is closed and reopened.

---

# System Achitecture 

The mobile application includes three primary screens:

-Home Screen
The Home screen allows users to log a new mood entry and optionally record a note. This screen also provides navigation to the Dashboard and Settings screens.

-Dashboard Screen
The Dashboard displays all saved mood and habit entries. Users can review their previous logs and delete entries when necessary.

-Settings Screen
The Settings screen allows users to manage stored data, including clearing all saved entries.

-Navigation Layer
The navigation layer manages the movement between different screens within the application. The system uses the React Navigation library to enable users to transition between the Home, Dashboard, and Settings screens. This navigation structure organizes the application interface and provides a consistent user experience, improving usability and simplifying interaction with the system.

-Application Logic Layer
The application logic layer manages state and handles operations such as adding, updating, and deleting entries. It also coordinates interactions between the user interface and the data storage layer, ensuring that all operations update the UI and persist data correctly.

-Data Storage Layer
The data storage layer is responsible for saving and retrieving user data generated within the application. Mood entries, habit tracking information, and user preferences are stored locally using Async Storage. Local storage enables the application to retain data even after the application has been closed and reopened, ensuring that user information persists across sessions without requiring external databases or internet connectivity.

---

# Technologies Used

The application was developed using the following technologies:

*React Native* – Cross-platform mobile application development framework
*Expo* – Development environment for building React Native applications
*React Navigation* – Library used to manage screen navigation
*Async Storage* – Local storage system for persistent data management
*JavaScript* – Programming language used to implement application logic

---

# Project Structure

mood-habit-tracker
│
├── App.js
├── package.json
│
├── screens
│   ├─ HomeScreen.js
│   ├─ DashboardScreen.js
│   └─ SettingsScreen.js
│
├── components
│   ├─ MoodSelector.js
│   └─ EntryItem.js
│
├── storage
│   └─ storage.js
│
└── assets

---

# How the Application Works

1. The user selects a mood on the **Home screen**.
2. An optional note can be added to provide context for the mood entry.
3. The entry is saved locally using Async Storage.
4. The **Dashboard screen** retrieves and displays all stored entries.
5. Users can delete entries or clear all data through the **Settings screen**.

---

# What Was Learned

This project helped demonstrate several important mobile development concepts:

* Designing modular components in React Native
* Implementing multi-screen navigation
* Managing application state
* Persisting data using Async Storage
* Implementing CRUD operations within a mobile application
* Structuring a small mobile project for maintainability

The project also highlighted the importance of designing simple user interfaces that allow users to interact with the application quickly and efficiently.

---

# Future Improvements

Potential improvements for the application include:

* Mood trend visualization with charts
* Habit streak tracking
* Reminder notifications for daily logging
* Cloud-based data synchronization
* Enhanced user interface design

These features could further improve the usefulness of the application while maintaining its core purpose of supporting self-monitoring.


