
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function VehicleDetails({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>VehicleDetails Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
