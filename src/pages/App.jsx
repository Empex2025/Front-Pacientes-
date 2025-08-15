import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';
import Localization from './Localization';
import Contact from './Contacts';
import ProfileForFollow from './ProfileForFollow';
import { BottomNav } from '../BottomNav';
import { FeedProvider } from '../components/FeedContext'; // <-- Import

const Stack = createStackNavigator();

export default function App() {
  return (
    <FeedProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Localization"
            component={Localization}
            options={{
              title: 'Localização',
              headerLeft: () => null,
              headerShown: true,
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="Contacts"
            component={Contact}
            options={{
              title: 'Contatos',
              headerLeft: () => null,
              headerShown: true,
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="ProfileForFollow"
            component={ProfileForFollow}
            options={{
              title: 'Perfis para seguir',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="MainTabs"
            component={BottomNav}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FeedProvider>
  );
}
