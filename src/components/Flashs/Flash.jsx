// src/components/FlashItem/FlashItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/styles'; // Importando suas cores

// Substitua o 'require' por esta URI de dados Base64
const defaultImage = { uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00eiIvPjwvc3ZnPg==' };

const FlashItem = ({ imageUri, name, isSeen }) => {
  // A lógica agora funciona perfeitamente para ambos os casos
  const imageSource = imageUri ? { uri: imageUri } : defaultImage;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.imageContainer, isSeen && styles.seenBorder]}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 15,
  },
  imageContainer: {
    width: 87,
    height: 85,
    borderRadius: 40,
    borderWidth:3.5,
    borderColor: colors.principalColor, // Usando a cor principal para a borda
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  seenBorder: {
    borderColor: '#ccc', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default FlashItem;