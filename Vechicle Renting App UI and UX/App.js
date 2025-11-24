
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';
import LoginSignup from './screens/LoginSignup';
import Home from './screens/Home';
import Search from './screens/Search';
import VehicleDetails from './screens/VehicleDetails';
import OwnerContact from './screens/OwnerContact';
import OwnerPost from './screens/OwnerPost';
import Menu from './screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
        <Stack.Screen name="OwnerContact" component={OwnerContact} />
        <Stack.Screen name="OwnerPost" component={OwnerPost} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
