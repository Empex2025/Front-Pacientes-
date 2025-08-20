import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'; // Adicionei ScrollView para o caso da tela precisar rolar
import Header from '../components/Header';
import FlashesContainer from '../components/Flashs/FlashesContainer '; // Ajuste o caminho para onde você salvou o componente

const HomeFeed = () => {
  return (
    <>
      <Header />

      {/* Para permitir que toda a tela role, podemos usar uma ScrollView aqui */}
      <ScrollView style={styles.container}>
        {/* Aqui você adiciona o container dos Flashes */}
        <FlashesContainer />

        {/* Aqui você pode adicionar o resto do conteúdo do seu feed, 
          como posts, etc. 
        */}

      </ScrollView>
    </>
  );
};

export default HomeFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usar flex: 1 para ocupar o espaço disponível
    backgroundColor: '#fff', // Mudei para branco para combinar com o exemplo, mas pode ser '#e0e0e0' se preferir
    // A propriedade paddingBottom com 'vh' não é padrão no React Native,
    // se precisar de um espaço no final, use um valor numérico ou uma View vazia com altura.
  },
  // O estilo textBottom não está sendo usado, então pode ser removido se não for necessário.
});