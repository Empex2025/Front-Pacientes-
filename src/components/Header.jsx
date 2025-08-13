import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Importando os SVGs conforme você especificou
import IconsTitle from '../../assets/header/Icon.svg';
import Sino from '../../assets/header/Notification.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo da iSaúde */}
      <IconsTitle width={150} height={40} />

      {/* Ícones da Direita */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.notificationButton}>
          <Sino width={24} height={24} />
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Use a imagem do seu usuário aqui
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
    alignItems: 'flex-end',   // Alinha os itens na parte de baixo do container
    paddingBottom: 15,       // Adiciona um espaçamento na parte de baixo
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Mantemos 'center' para alinhar o sino e o avatar entre si
    // A linha 'paddingBottom: 5' foi removida daqui para corrigir o alinhamento
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