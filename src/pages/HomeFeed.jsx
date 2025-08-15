import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeFeed = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Bem-vindo de asdasdasdvolta ao Home Feed!</Text>
    </View>
  );
};

export default HomeFeed;

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  }
});
