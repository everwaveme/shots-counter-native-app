import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import { Colors } from '../styleVariables';
import { useRef } from 'react';

function ResetButtons({ onPressFirstPlayerReset, onPressSecondPlayerReset, onPressAllReset }) {

  const btnAnimatedValue = {
    resetFirstPlayer: useRef(new Animated.Value(100)).current,
    resetSecondPlayer: useRef(new Animated.Value(100)).current,
    resetAll: useRef(new Animated.Value(100)).current,
  };

  const btnOpacity = {
    resetFirstPlayer: btnAnimatedValue.resetFirstPlayer.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    }),
    resetSecondPlayer: btnAnimatedValue.resetSecondPlayer.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    }),
    resetAll: btnAnimatedValue.resetAll.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    })
  };

  const fadeInResetFirstPlayer = () => {
    Animated.timing(btnAnimatedValue.resetFirstPlayer, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutResetFirstPlayer = () => {
    Animated.timing(btnAnimatedValue.resetFirstPlayer, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeInResetSecondPlayer = () => {
    Animated.timing(btnAnimatedValue.resetSecondPlayer, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutResetSecondPlayer = () => {
    Animated.timing(btnAnimatedValue.resetSecondPlayer, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeInResetAll = () => {
    Animated.timing(btnAnimatedValue.resetAll, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutResetAll = () => {
    Animated.timing(btnAnimatedValue.resetAll, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.resetBtnsWrap}>
      <Pressable
        onPress={onPressFirstPlayerReset}
        onPressIn={fadeInResetFirstPlayer}
        onPressOut={fadeOutResetFirstPlayer}
      >
        <Animated.View style={{
          ...styles.resetBtn,
          opacity: btnOpacity.resetFirstPlayer
        }}>
          <Text style={styles.resetBtnText}>
            Reset
          </Text>
        </Animated.View>
      </Pressable>

      <Pressable
        onPress={onPressAllReset}
        onPressIn={fadeInResetAll}
        onPressOut={fadeOutResetAll}
      >
        <Animated.View style={{
          ...styles.resetAllBtn,
          opacity: btnOpacity.resetAll
        }}>
          <Text style={styles.resetBtnText}>
            Reset All
          </Text>
        </Animated.View>
      </Pressable>

      <Pressable
        onPress={onPressSecondPlayerReset}
        onPressIn={fadeInResetSecondPlayer}
        onPressOut={fadeOutResetSecondPlayer}
      >
        <Animated.View style={{
          ...styles.resetBtn,
          opacity: btnOpacity.resetSecondPlayer
        }}>
          <Text style={styles.resetBtnText}>
            Reset
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  resetBtnsWrap: {
    paddingTop: 30,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.accent,
    borderRadius: 10,
    borderWidth: 2,
  },
  resetBtnText: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.light,
    textAlign: 'center',
    lineHeight: 18,
  },
  resetAllBtn: {
    marginHorizontal: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
  },
})

export default ResetButtons;