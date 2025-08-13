import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importações aprimoradas
import { TAB_CONFIG } from './utils/tab.config'; // Ajuste o caminho
import { AnimatedTabBarIcon } from './animations/AnimatedTabBarIcon'; // Ajuste o caminho

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarInactiveTintColor: '#202124',
        tabBarActiveTintColor: '#ffffff', // Cor do ícone/texto ativo
        
        // CORREÇÃO: Usamos tabBarActiveBackgroundColor para o item focado
        // E tabBarInactiveBackgroundColor para os itens não focados.
        // A propriedade tabBarItemStyle é para estilos estáticos, como o borderRadius.]h
        
        tabBarActiveBackgroundColor: '#d9eefcff', // Cor de fundo do item focado
        tabBarInactiveBackgroundColor: '#ffffff', // Cor de fundo dos itens não focados
        tabBarItemStyle: styles.tabBarItem,
       // Aplicamos o estilo para bordas arredondadas e altura
        
        tabBarIcon: ({ focused }) => {
          const { active, inactive } = TAB_CONFIG[route.name].icons;
          return (
            <AnimatedTabBarIcon
              focused={focused}
              ActiveIcon={active}
              InactiveIcon={inactive}
            />
          );
        },
      })}
    >
      {/* Mapeia a configuração para criar as telas dinamicamente */}
      {Object.entries(TAB_CONFIG).map(([name, config]) => (
        <Tab.Screen
          key={name}
          name={name}
          component={config.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90, // Altura total da barra
    paddingTop: 10, // Espaço superior
    borderRadius: 25, // Bordas arredondadas
    borderTopWidth: 0,
    position: 'absolute', // Faz a barra flutuar // Distância da parte inferior da tela
 // Distância da direita
    backgroundColor: '#ffffff',
    // Sombras para dar o efeito de flutuação
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

  },
  tabBarItem: {
    borderRadius: 16, // Bordas arredondadas para o item
    marginHorizontal: 5, // Espaço entre os itens
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    // Pequeno espaço entre o ícone e o texto
  },
});
