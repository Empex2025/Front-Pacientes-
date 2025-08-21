import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Header from '../components/Header'; // Supondo que você tenha este componente
import FlashesContainer from '../components/Flashs/FlashesContainer ';
import Post from '../components/Posts/Post'; // Importando o novo componente Post
import { postData } from '../data/mockPostData'; // Importando os dados de exemplo
import PulsesAndFeedContainer from '../components/feedComponents/PulsesEfeed/PulsesAndFeedContainer'

const HomeFeed = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.container}>
        <FlashesContainer />

        <PulsesAndFeedContainer/>

        {/* Aqui você adiciona o componente de Post */}
        <Post data={postData} />
        
        {/* Você pode adicionar mais posts aqui, talvez usando um .map() em uma lista de posts */}
        <Post data={{...postData, id: '2'}} />

        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgb(239,241,245)',
  },
  container: {
    flex: 1,
  },
});

export default HomeFeed;
