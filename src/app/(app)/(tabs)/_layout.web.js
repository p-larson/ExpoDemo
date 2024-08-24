import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f8f8f8",
  },
  header: {
    paddingTop: 40, // Space for status bar (adjust as necessary)
    paddingBottom: 10,
    backgroundColor: "#6200ee",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    paddingVertical: 10,
  },
  tabBarItem: {
    padding: 10,
    fontSize: 16,
  },
});
