import React from 'react';
import Loading from './Loading'; 
import Localization from './Localization'; 
import Contact from './Contacts'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {/* A tela de loading é a primeira rota.
            Ela irá navegar para a tela 'Welcome' sozinha. */}
        <Stack.Screen 
          name="Loading" 
          component={Loading} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Localization" 
          component={Localization} 
          options={{ 
          title: 'Contatos',
          headerLeft: () => null,
          headerShown: true
          }}
        />

        <Stack.Screen 
          name="Contacts" 
          component={Contact} 
          options={{ 
          title: 'Contatos',
          headerLeft: () => null,
          headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}