import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Usando Feather para os ícones

const PostHeader = ({ user, source, timestamp }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.metaInfo}>
          <Icon name="map-pin" size={14} color="#65676B" />
          <Text style={styles.sourceText}>{source} • {timestamp}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="bookmark" size={24} color="#65676B" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Icon name="more-horizontal" size={24} color="#65676B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#050505',
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  sourceText: {
    fontSize: 12,
    color: '#65676B',
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'row',
  },
});

export default PostHeader;