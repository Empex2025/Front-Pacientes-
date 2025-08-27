import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

// Importando os SVGs
import BottomImage from '../../assets/bottomShortcuts/BottomImage.svg';
import BottomImageActive from '../../assets/bottomShortcuts/BottomImageActive.svg';
import NotaIcon from '../../assets/bottomShortcuts/Nota.svg';
import FotosEVideosIcon from '../../assets/bottomShortcuts/FotosEVideos.svg';
import PulseIcon from '../../assets/bottomShortcuts/Pulse.svg';

const BUTTON_SIZE = 56;

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [buttonRotation] = useState(new Animated.Value(0));

  const options = [
    { id: 'nota', icon: NotaIcon },
    { id: 'fotos', icon: FotosEVideosIcon },
    { id: 'pulse', icon: PulseIcon },
  ];

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(buttonRotation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const handleOptionPress = (optionId) => {
    console.log(`Opção selecionada: ${optionId}`);
  };

  const buttonRotate = buttonRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });


  const bottom_size =  200
  return (
    <View style={styles.container}>
      {/* Opções do menu */}
      {options.map((option, index) => {
        const scale = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

        const translateY = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -(index + 1) * (BUTTON_SIZE + 10)], // altura + espaçamento
        });

        const opacity = animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1],
        });

        const IconComponent = option.icon;

        return (
          <Animated.View
            key={option.id}
            style={[
              styles.optionContainer,
              {
                transform: [{ scale }, { translateY }],
                opacity,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleOptionPress(option.id)}
              activeOpacity={0.8}
            >
              <IconComponent width={250} height={250} />
            </TouchableOpacity>
          </Animated.View>
        );
      })}

      {/* Botão principal */}
      <Animated.View
        style={[
          styles.mainButtonContainer,
          { transform: [{ rotate: buttonRotate }] },
        ]}
      >
        <TouchableOpacity
          style={styles.mainButton}
          onPress={toggleMenu}
          activeOpacity={0.8}
        >
          
          
          {isOpen ? (
            <BottomImageActive 
            style={{
              top:30,
              right:30
            }}
             width={bottom_size} height={bottom_size} />
          ) : (
            <BottomImage
            style={{
              top:30,
              right:30
            }}
             width={bottom_size} height={bottom_size} />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    alignItems: 'flex-end',
    zIndex: 99999,
    elevation: 9999,
  },
  mainButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
  
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  optionContainer: {
    position: 'absolute',
    bottom: 0,
    right: -37,
    top:-60
  },
});

export default FloatingActionButton;
