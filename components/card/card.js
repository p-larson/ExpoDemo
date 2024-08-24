import React from 'react';
import { View } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={{ borderRadius: 16, padding: 16, backgroundColor: 'red' }}>
      {children}
     </View>
  );
}
