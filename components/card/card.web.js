import React from 'react';
import { View } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={{ borderRadius: 8, padding: 8, backgroundColor: 'blue' }}>
      {children}
     </View>
  );
}
