import { StyleSheet, Pressable, Animated, Image } from 'react-native';
import { windowHeight } from '../styleVariables';
import { useRef } from 'react';

function ClearBtn({ onPressClear }) {
  const btnAnimatedValue = {
    clearBtn: useRef(new Animated.Value(100)).current,
  };

  const btnOpacity = {
    clearBtn: btnAnimatedValue.clearBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    })
  };

  const fadeInClear = () => {
    Animated.timing(btnAnimatedValue.clearBtn, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutClear = () => {
    Animated.timing(btnAnimatedValue.clearBtn, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Pressable
        onPress={onPressClear}
        onPressIn={fadeInClear}
        onPressOut={fadeOutClear}
      >
        <Animated.View style={{
          ...styles.clearBtn,
          opacity: btnOpacity.clearBtn
        }}>
          <Image
            style={styles.clearBtnImg}
            source={require('../../assets/clear-icon.png')}
            resizeMode='contain'
          />
        </Animated.View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  clearBtn: {
    marginLeft: -5,
    // marginHorizontal: windowHeight > 800 ? 7 : 5,
  },
  clearBtnImg: {
    height: windowHeight > 800 ? 35 : 30,
    // maxWidth: 70,
    // width: 70,
  },
})

export default ClearBtn;