import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import { Colors, windowHeight } from '../styleVariables';
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
    paddingTop: windowHeight > 800 ? 20 : 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    paddingVertical: windowHeight > 800 ? 8 : 5,
    paddingHorizontal: windowHeight > 800 ? 16 : 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.accent,
    borderRadius: 10,
    borderWidth: 2,
  },
  resetBtnText: {
    fontSize: windowHeight > 800 ? 16 : 14,
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.light,
    textAlign: 'center',
    lineHeight: windowHeight > 800 ? 18 : 16,
  },
  resetAllBtn: {
    marginHorizontal: windowHeight > 800 ? 20 : 15,
    paddingVertical: windowHeight > 800 ? 8 : 5,
    paddingHorizontal: windowHeight > 800 ? 16 : 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
  },
})

export default ResetButtons;