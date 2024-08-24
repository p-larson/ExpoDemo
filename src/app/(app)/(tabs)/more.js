import { router } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

export default function More() {
  return (
    <View>
      <Text>More</Text>

      <Button
        onPress={() => {
          router.push("/chat");
        }}
        title="Chat"
      />
    </View>
  );
}
