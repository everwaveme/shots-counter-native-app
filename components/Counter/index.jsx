import { StyleSheet, Text, View, Pressable, Image, Animated } from 'react-native';
import { Colors, windowWidth, windowHeight } from '../styleVariables';
import { useRef } from 'react';


function Counter({ percentage, potted, allShots, onPressPotted, onPressMissed }) {
  const btnAnimatedValue = {
    pottedBtn: useRef(new Animated.Value(100)).current,
    missedBtn: useRef(new Animated.Value(100)).current,
  };

  const btnOpacity = {
    pottedBtn: btnAnimatedValue.pottedBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    }),
    missedBtn: btnAnimatedValue.missedBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    })
  };

  const fadeInPottedBtn = () => {
    Animated.timing(btnAnimatedValue.pottedBtn, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutPottedBtn = () => {
    Animated.timing(btnAnimatedValue.pottedBtn, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeInMissedBtn = () => {
    Animated.timing(btnAnimatedValue.missedBtn, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutMissedBtn = () => {
    Animated.timing(btnAnimatedValue.missedBtn, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.statsPlayerWrap}>
      <View>
        <Text style={styles.statsPlayerText}>
          {percentage}%
          ({potted}/{allShots})
        </Text>
      </View>

      <View style={styles.statsPlayerBtnsWrap}>
        <Pressable onPress={onPressPotted} onPressIn={fadeInPottedBtn} onPressOut={fadeOutPottedBtn}>
          <Animated.View style={{
            ...styles.statsPlayerPottedBtn,
            opacity: btnOpacity.pottedBtn
          }}>
            <Image
              style={styles.statsPlayerPottedImg}
              source={require('../../assets/potted-icon.png')}
              resizeMode='contain'
            />
          </Animated.View>
        </Pressable>

        <Pressable onPress={onPressMissed} onPressIn={fadeInMissedBtn} onPressOut={fadeOutMissedBtn}>
          <Animated.View style={{
            ...styles.statsPlayerMissedBtn,
            opacity: btnOpacity.missedBtn
          }}>
            <Image
              style={styles.statsPlayerMissedImg}
              source={require('../../assets/missed-icon.png')}
              resizeMode='contain'
            />
          </Animated.View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsPlayerWrap: {
    flexBasis: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statsPlayerText: {
    marginBottom: 15,
    fontSize: windowHeight > 800 ? 16 : 14,
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.light,
    textAlign: 'center',
  },
  statsPlayerBtnsWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsPlayerPottedBtn: {
    marginHorizontal: windowHeight > 800 ? 7 : 0,

  },
  statsPlayerPottedImg: {
    width: windowWidth > 500 ? 70 : 50,
    height: windowHeight > 800 ? 50 : 25,
  },

  statsPlayerMissedBtn: {
    marginHorizontal: windowHeight > 800 ? 7 : 0,
  },

  statsPlayerMissedImg: {
    width: windowWidth > 500 ? 70 : 50,
    height: windowHeight > 800 ? 50 : 25,
  }
});

export default Counter;