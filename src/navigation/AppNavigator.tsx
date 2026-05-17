import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ChatScreen from '../screens/ChatScreen';
import AdminScreen from '../screens/AdminScreen';
import DemoScreen from '../screens/DemoScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  Category: undefined;
  Chat: { category?: string } | undefined;
  Admin: undefined;
  Demo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>
  );
}
