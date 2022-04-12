import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Preload} from '../pages/Preload';
import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';

export function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SingIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}