// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading'; 
import Localization from './Localization'; 
import Contact from './Contacts';

// Importa o componente BottomNav, que agora é o nosso navegador de abas.
import { BottomNav } from '../BottomNav';

const Stack = createStackNavigator();

// Definindo o componente principal do aplicativo
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
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
        {/*
          O BottomNav é uma única tela no Stack.Navigator.
          Isso faz com que o BottomNav seja renderizado apenas uma vez e
          sirva como um contêiner para as telas Feed e Profile.
        */}
        <Stack.Screen 
          name="MainTabs" 
          component={BottomNav}
          options={{ 
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
