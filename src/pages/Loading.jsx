// Seu arquivo Loading.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { style } from '../styles/styles';
import IconsTitle from '../../assets/telaInicial/IconTitle.svg'
import LoadingAnimation from '../animations/LoadingAnimations'; 

// O 'navigation' é passado como prop pelo React Navigation
export default function Loading({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  // Usa o useEffect para criar o temporizador
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      navigation.replace('Localization'); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.loading}>
      <IconsTitle width={300} height={300} />
      
      {isLoading && <LoadingAnimation />}
    </View>
  );
}