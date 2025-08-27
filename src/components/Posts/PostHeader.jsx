import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Usando Feather para os ícones
import { ProfileOptionsModal } from '../ProfileOptionsModal';
import { BlockConfirmationModal } from '../BlockConfirmationModal';
import { useUserBlock } from '../UserBlockContext';

const PostHeader = ({ user, source, timestamp }) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const { isUserBlocked, blockUser } = useUserBlock();

  const handleOptionsPress = () => {
    setShowOptionsModal(true);
  };

  const handleAboutAccount = () => {
    Alert.alert('Sobre a Conta', `Informações sobre ${user.name}`);
  };

  const handleReport = () => {
    Alert.alert('Denunciar', `Denunciar ${user.name}`);
  };

  const handleBlockUser = () => {
    setShowBlockModal(true);
  };

  const handleConfirmBlock = () => {
    blockUser(user.id);
    Alert.alert('Usuário Bloqueado', `${user.name} foi bloqueado com sucesso.`);
  };

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
        <TouchableOpacity style={{ marginLeft: 16 }} onPress={handleOptionsPress}>
          <Icon name="more-horizontal" size={24} color="#65676B" />
        </TouchableOpacity>
      </View>

      {/* Modais */}
      <ProfileOptionsModal
        visible={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        onAboutAccount={handleAboutAccount}
        onReport={handleReport}
        onBlockUser={handleBlockUser}
        username={user.username || user.name}
      />

      <BlockConfirmationModal
        visible={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirmBlock={handleConfirmBlock}
        username={user.username || user.name}
      />
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