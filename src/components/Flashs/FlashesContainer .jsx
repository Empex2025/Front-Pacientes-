// src/components/FlashesContainer/FlashesContainer.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FlashItem from './Flash'; // Ajuste o caminho se necessário

// Dados de exemplo
const flashData = [
  { id: '1', name: '@dra.mari...', imageUri: 'https://i.pravatar.cc/150?img=1', isSeen: false },
  { id: '2', name: '@dr.marco...', imageUri: 'https://i.pravatar.cc/150?img=2', isSeen: false },
  { id: '3', name: '@jamileco...', imageUri: 'https://i.pravatar.cc/150?img=3', isSeen: false },
  { id: '4', name: '@anapaula...', imageUri: 'https://i.pravatar.cc/150?img=4', isSeen: true },
  { id: '5', name: 'teste', imageUri: 'https://i.pravatar.cc/150?img=5', isSeen: true },
  { id: '6', name: 'teste', imageUri: 'https://i.pravatar.cc/150?img=6', isSeen: false },
  { id: '7', name: 'teste', imageUri: 'https://i.pravatar.cc/150?img=7', isSeen: false },
];

const FlashesContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashs</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        
        {/* Componente "Seu Flash" adicionado aqui */}
        <TouchableOpacity style={styles.yourFlashContainer}>
          <View style={styles.yourFlashCircle}>
            <View style={styles.plusIconCircle}>
              <Text style={styles.plusIconText}>+</Text>
            </View>
          </View>
          <Text style={styles.yourFlashName}>Seu Flash</Text>
        </TouchableOpacity>

        {/* Mapeamento dos outros flashes */}
        {flashData.map(item => (
          <FlashItem
            key={item.id}
            name={item.name}
            imageUri={item.imageUri}
            isSeen={item.isSeen}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  // --- ESTILOS ADICIONADOS PARA O "SEU FLASH" ---
  yourFlashContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  yourFlashCircle: {
    width: 87,
    height: 85,
    borderRadius: 34,
    backgroundColor: '#6C89F5', // Cor azul do ícone
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconText: {
    color: '#6C89F5', // Cor azul do ícone
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32, // Ajuste para centralizar o "+" verticalmente
  },
  yourFlashName: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default FlashesContainer;