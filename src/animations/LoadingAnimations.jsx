import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Ball from '../../assets/telaInicial/ball.svg';
import GrayBall from '../../assets/telaInicial/grayball.svg';

export default function LoadingAnimation() {
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const translateXAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDotIndex(prevIndex => (prevIndex + 1) % 4); 
        }, 400);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        Animated.timing(translateXAnim, {
            toValue: activeDotIndex * styles.ballGap, // O valor final da animação
            duration: 150, // Duração da animação (ajuste para a fluidez que você quer)
            useNativeDriver: true, // Use o driver nativo para melhor performance
        }).start();
    }, [activeDotIndex]); // 3. Roda o efeito toda vez que activeDotIndex mudar

    return (
        <View style={styles.container }>
            <View style={styles.staticDotsContainer}>
                <GrayBall width={20} height={20} />
                <GrayBall width={20} height={20} />
                <GrayBall width={20} height={20} />
                <GrayBall width={20} height={20} />
            </View>

            <Animated.View // Use um Animated.View para aplicar a animação
                style={[
                    styles.movingBall,
                    {
                        transform: [{
                            translateX: translateXAnim // Use o valor animado aqui
                        }],
                    },
                ]}
            >
                <Ball width={28} height={30} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    staticDotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        left:'0'
    },
    movingBall: {
        position: 'absolute',
        left:'0'
    },
    ballGap: 28, // A distância entre as bolinhas (ajuste para alinhar com o gap)
});