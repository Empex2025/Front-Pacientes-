import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import { InicialText } from '../InicialText';

const PROFILES = [
  { id: '1', name: 'Exemplo 1', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E1' },
  { id: '2', name: 'Exemplo 2', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E2' },
  { id: '3', name: 'Exemplo 3', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E3' },
  { id: '4', name: 'Exemplo 4', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E4' },
  { id: '5', name: 'Exemplo 5', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E5' },
  { id: '6', name: 'Exemplo 6', specialism: 'Clínico Geral', image: 'https://placehold.co/400x400/96c9e0/ffffff?text=E6' },
];

const ProfileItem = ({ name, specialism, image }) => (
  <View style={styles.itemContainer}>
    <View style={styles.profileInfo}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Image
            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-verified-badge-3788755-3165319.png' }}
            style={styles.verifiedIcon}
          />
        </View>
        <Text style={styles.profileSpecialism}>{specialism}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.followButton}>
      <Text style={styles.followButtonText}>Seguir</Text>
    </TouchableOpacity>
  </View>
);

const FeedBody = () => {
  const renderItem = ({ item }) => (
    <ProfileItem 
      name={item.name} 
      specialism={item.specialism} 
      image={item.image} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PROFILES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <InicialText
              Title="Vamos começar sua jornada!"
              subTitle="Encontre profissionais, perfis e temas do seu interesse para personalizar seu feed com conteúdo relevante.."
              // CORREÇÃO: Adicionando o estilo para centralizar o texto no header.
              // A propriedade style é passada para o componente, que deve usá-la
              // para aplicar a centralização.
              style={{ alignItems: 'start' }} 
            />
          </View>
        }
      />
    </View>
  );
};

export default FeedBody;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: (239,241,245),
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  profileSpecialism: {
    fontSize: 14,
    color: '#888',
  },
  followButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  followButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
