import React from "react";
import { Slot } from "expo-router";
import store from "../store";
import { Provider } from "react-redux";
import Flasher from '@components/flasher'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Slot />
          <Flasher />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
