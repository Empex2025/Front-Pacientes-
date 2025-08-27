import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View } from 'react-native';

// Telas 
import Loading from './Loading';
import Localization from './Localization';
import Contact from './Contacts';
import ProfileForFollow from './ProfileForFollow';
import Pulses from './Pulses';
import UserProfileExample from './UserProfileExample';
import { BottomNav } from '../BottomNav';
import { FeedProvider } from '../components/FeedContext';
import { UserBlockProvider } from '../components/UserBlockContext';
import { Notification } from './Notifications';
import { Chat } from './Chat';
import { StoryViewer } from '../components/Stories/StoryViewer';

const Stack = createStackNavigator();

// Contexto para o StoryViewer global
const StoryViewerContext = createContext();

export const useStoryViewer = () => {
  
  const context = useContext(StoryViewerContext);
  if (!context) {
    throw new Error('useStoryViewer must be used within a StoryViewerProvider');
  }
  return context;
};

const StoryViewerProvider = ({ children }) => {
  const [globalStory, setGlobalStory] = useState(null);

  const showGlobalStory = (story) => {
    console.log('showGlobalStory called with:', story?.id);
    if (!story || !story.media || story.media.length === 0) {
      console.error('Invalid story data passed to showGlobalStory:', story);
      return;
    }
    setGlobalStory(story);
  };

  const hideGlobalStory = () => {
    console.log('hideGlobalStory called');
    setGlobalStory(null);
  };

  return (
    <StoryViewerContext.Provider value={{ showGlobalStory, hideGlobalStory }}>
      {children}
      {globalStory && (
        <StoryViewer
          story={globalStory}
          onClose={hideGlobalStory}
        />
      )}
    </StoryViewerContext.Provider>
  );
};

export default function App() {
  return (
    <StoryViewerProvider>
      <UserBlockProvider>
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
                    <Text style={{ fontSize: 16, color: '#007AFF' }}>  Notificações</Text>
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
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="Pulses"
              component={Pulses}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="UserProfileExample"
              component={UserProfileExample}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FeedProvider>
    </UserBlockProvider>
    </StoryViewerProvider>
  );
}