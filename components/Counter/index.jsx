import { StyleSheet, Text, View, Pressable, Image, Animated } from 'react-native';
import { Colors } from '../styleVariables';
import { useRef } from 'react';

function Counter({ percentage, potted, allShots, onPressPotted, onPressMissed }) {

  const btnAnimatedValue = {
    pottedBtn: useRef(new Animated.Value(100)).current,
    missedBtn: useRef(new Animated.Value(100)).current,
  }

  const btnOpacity = {
    pottedBtn: btnAnimatedValue.pottedBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    }),
    missedBtn: btnAnimatedValue.missedBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    }),
  }

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
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsPlayerText: {
    fontSize: 16,
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
    marginRight: 15,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  statsPlayerPottedImg: {
    width: 50,
    height: 70,
  },

  statsPlayerMissedBtn: {

    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  statsPlayerMissedImg: {
    width: 50,
    height: 70,
  }
});

export default Counter;