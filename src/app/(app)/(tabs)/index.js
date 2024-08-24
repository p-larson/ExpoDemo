import React from "react";
import { View, Text, Button } from "react-native";
import Flasher from "@components/flasher";
import { COLORS } from "@styles/colors";

export default function Dashboard() {
  return (
    <View style={{ margin: 20}}>
      <Text>Dashboard</Text>

      <View
        style={{ width: 20, height: 20, backgroundColor: COLORS.SUCCESS }}
      >
        
      </View>
      <View style={{ alignSelf: 'flex-start' }}>
        <Button
          onPress={() => {
            Flasher.success("Hello World");
          }}
          title="Press Me"
        />
      </View>
    </View>
  );
}
