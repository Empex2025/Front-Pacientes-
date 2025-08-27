import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { healthStyles } from './HealthStyles';

const PlaceholderScreen = ({ onNavigate, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={healthStyles.header}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={healthStyles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={healthStyles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholderText}>{description}</Text>
        <Text style={styles.comingSoonText}>Em breve...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4576F2',
    textAlign: 'center',
  },
});

export default PlaceholderScreen;

