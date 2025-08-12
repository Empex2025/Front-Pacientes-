// BottomNav.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';

// Importa a tela de Feed.
import { Feed } from './pages/Feed';

// Componente de placeholder para a tela de Perfil
const Profile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela de Perfil</Text>
  </View>
);

const Tab = createBottomTabNavigator();

// Define o navegador de abas com as telas Feed e Profile
export const BottomNav = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Tab.Screen name="Feed" component={Feed} />
  </Tab.Navigator>
);
