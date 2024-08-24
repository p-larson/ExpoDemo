import React, { useEffect } from "react";
import { Redirect, SplashScreen, Stack } from "expo-router";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

export default function AppLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
      return;
    }
  }, [error]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // if (!loaded) return null;

  const { accessToken } = useSelector((state) => state.app);

  if (!accessToken) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
