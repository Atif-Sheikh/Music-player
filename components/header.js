import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';




const Header = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDownPress}>
        <Image style={styles.button}
          source={require('../assets/baseline_keyboard_arrow_down_white_18dp.png')} />
      </TouchableOpacity>
      <Text onPress={onMessagePress}
        style={styles.message}>{message.toUpperCase()}</Text>
      <TouchableOpacity onPress={onQueuePress}>
        <Image style={styles.button}
          source={require('../assets/baseline_queue_music_white_18dp.png')} />
      </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 72,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
    },
    button: {
        opacity: 0.72
    },
});

export default Header;