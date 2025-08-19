import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TAB_CONFIG } from './utils/tab.config';
import { AnimatedTabBarIcon } from './animations/AnimatedTabBarIcon';

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
        tabBarActiveTintColor: '#ffffff',
        tabBarActiveBackgroundColor: '#d9eefcff',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarItemStyle: styles.tabBarItem,
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
    height: 90,
    paddingTop: 10,
    borderRadius: 25,
    borderTopWidth: 0,
    position: 'absolute',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabBarItem: {
    borderRadius: 16,
    marginHorizontal: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});
