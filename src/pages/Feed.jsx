//Feed.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import FeedBody from '../components/feedComponents/FeedBody';

export const Feed = () => (
    <View style={FeedStyles.container}>
        <Header />
        <FeedBody />
    </View>    
);

const FeedStyles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor:(239,241,245)
    }
});
