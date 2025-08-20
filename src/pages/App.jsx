import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';

// Telas 
import Loading from './Loading';
import Localization from './Localization';
import Contact from './Contacts';
import ProfileForFollow from './ProfileForFollow';
import { BottomNav } from '../BottomNav';
import { FeedProvider } from '../components/FeedContext';
import { Notification } from './Notifications';

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
            name="Notifications"
            component={Notification}
            options={({ navigation }) => ({
              headerTitle: 'Notificações',
              headerShown: true,
              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{ marginLeft: 15 }}
                >
                  <Text style={{ fontSize: 16, color: '#007AFF' }}>Notificações</Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#FFFFFF',
                elevation: 0, 
                shadowOpacity: 0, 
              },
            })}
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