import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="fix-it-requests"
        options={{ title: "Fix It Requests" }}
      />
      <Tabs.Screen name="rent" options={{ title: "Rent" }} />
      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="notifications" options={{ title: "Notifications" }} />
      <Tabs.Screen name="more" options={{ title: "More" }} />
      <Tabs.Screen
        name="chat"
        options={{ title: "Chat", tabBarIcon: null, tabBarButton: () => null }}
      />
    </Tabs>
  );
}
