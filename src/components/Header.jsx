import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//icones
import IconsTitle from '../../assets/header/Icon.svg';
import Sino from '../../assets/header/Notification.svg';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <IconsTitle width={150} height={40} />

      <View style={styles.rightContainer}>

        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Sino width={24} height={24} />
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} 
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',  
    paddingBottom: 15,       
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default Header;