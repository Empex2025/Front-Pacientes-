// BottomNav.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

// --- Importe TODOS os ícones (normais e azuis) ---
// Ícones Inativos (vamos usar a cor preta para eles)
import HomeIcon from '../assets/bottomBar/Home.svg';
import SearchIcon from '../assets/bottomBar/Search.svg';
import HealthIcon from '../assets/bottomBar/Health.svg';
import ConversationIcon from '../assets/bottomBar/Conversation.svg';

// Ícones Ativos (azuis)
import BlueHomeIcon from '../assets/bottomBar/BlueIcons/BlueHome.svg';
import BlueSearchIcon from '../assets/bottomBar/BlueIcons/BlueSearch.svg';
import BlueHealthIcon from '../assets/bottomBar/BlueIcons/BlueHealth.svg';
import BlueConversationIcon from '../assets/bottomBar/BlueIcons/BlueConversation.svg';

// Importa a tela de Feed (ou sua tela inicial)
import { Feed } from './pages/Feed';

// Componentes de placeholder para as outras telas
const ExploreScreen = () => <View style={styles.container}><Text>Tela Explorar</Text></View>;
const HealthScreen = () => <View style={styles.container}><Text>Tela Minha Saúde</Text></View>;
const ConversationsScreen = () => <View style={styles.container}><Text>Tela Conversas</Text></View>;

// --- Componente customizado para o ícone com animação ---
const AnimatedTabBarIcon = ({ focused, InactiveComponent, ActiveComponent }) => {
  const animation = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focused ? 1 : 0,
      duration: 250, // Transição mais suave
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <View style={styles.iconContainer}>
      {/* Ícone Ativo (Azul) */}
      <Animated.View style={{ 
        opacity: animation,
        position: 'absolute'
      }}>
        <ActiveComponent width={30} height={30} />
      </Animated.View>
      
      {/* Ícone Inativo (Preto) */}
      <Animated.View style={{ 
        opacity: animation.interpolate({ 
          inputRange: [0, 1], 
          outputRange: [1, 0] 
        }),
        position: 'absolute'
      }}>
        <InactiveComponent width={30} height={30} />
      </Animated.View>
    </View>
  );
};

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
        tabBarActiveTintColor: '#007AFF', // Example of a color when active
        tabBarActiveBackgroundColor: '#f2f7ffff',
        tabBarItemStyle: {
          // This is the correct place to apply styles for each individual tab
          marginHorizontal: 2, // Adds some space between the tab items
          marginVertical: 5,   // Adds some space on the top and bottom
       }, // Cor do texto quando inativo
        tabBarIcon: ({ focused }) => {
          let InactiveComponent, ActiveComponent;

          if (route.name === 'Início') {
            InactiveComponent = HomeIcon;
            ActiveComponent = BlueHomeIcon;
          } else if (route.name === 'Explorar') {
            InactiveComponent = SearchIcon;
            ActiveComponent = BlueSearchIcon;
          } else if (route.name === 'Minha Saúde') {
            InactiveComponent = HealthIcon;
            ActiveComponent = BlueHealthIcon;
          } else if (route.name === 'Conversas') {
            InactiveComponent = ConversationIcon;
            ActiveComponent = BlueConversationIcon;
          }

          return (
            <AnimatedTabBarIcon
              focused={focused}
              InactiveComponent={InactiveComponent}
              ActiveComponent={ActiveComponent}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Início" component={Feed} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Minha Saúde" component={HealthScreen} />
      <Tab.Screen name="Conversas" component={ConversationsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  tabBar: { 
    borderRadius:100,
    height:'100%', 
    borderTopWidth: 0,  
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
    backgroundColor: '#fff', // Espaço para os textos
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});