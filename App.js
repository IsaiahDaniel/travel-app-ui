import React from 'react';
import { Dashboard, Place } from "./screens";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Tabs from "./navigation/Tabs";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'DashboardHome'}
      >
        <Stack.Screen
          name="DashboardHome"
          component={Tabs}
        />

        <Stack.Screen
          name="Place"
          component={Place}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;