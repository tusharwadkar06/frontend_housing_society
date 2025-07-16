import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';

const Stack = createStackNavigator();

const AnimatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // Remove transitionSpec and cardStyleInterpolator for v6+
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="createAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default AnimatedStack;