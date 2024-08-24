import React from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'expo-router';
import { authenticate } from '../slices/user';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("dev@payready.test");
  const [password, setPassword] = useState("123Secret!");

  const attemptLogin = () => {
    dispatch(
      authenticate({
        email,
        password,
      })
    );
  };

  const { accessToken } = useSelector((state) => state.app);

  if (accessToken) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View
        style={{
          padding: 32,
          borderColor: "#00000033",
          borderWidth: 2,
          borderRadius: 16,
        }}
      >
        <TextInput placeholder={email} value={email} onChangeText={setEmail} />
        <TextInput
          placeholder={password}
          value={password}
          onChangeText={setPassword}
        />
        <Text> Access Token: {accessToken} </Text>
        <Button title="Login" onPress={attemptLogin} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
