import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Animated } from 'react-native';
import { Colors } from '../styleVariables';

function NamesFormBtn() {
  const btnAnimatedValue = new Animated.Value(100);
  const btnColor = btnAnimatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.accentHover, Colors.accent]
  });

  Animated.timing(btnAnimatedValue, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start();

  return (
    <Pressable>
      <Animated.View style={{
        ...styles.namesFormBtn,
        backgroundColor: btnColor
      }}>
        <Text style={styles.namesFormBtnText}>
          Confirm
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  namesFormBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  namesFormBtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.light,
  }
});

export default NamesFormBtn;