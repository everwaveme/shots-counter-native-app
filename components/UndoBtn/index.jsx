import { StyleSheet, Pressable, Animated, Image } from 'react-native';
import { windowHeight } from '../styleVariables';
import { useRef } from 'react';

function UndoBtn({ onPressUndo }) {
  const btnAnimatedValue = {
    undoBtn: useRef(new Animated.Value(100)).current,
  };

  const btnOpacity = {
    undoBtn: btnAnimatedValue.undoBtn.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    })
  };

  const fadeInUndo = () => {
    Animated.timing(btnAnimatedValue.undoBtn, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutUndo = () => {
    Animated.timing(btnAnimatedValue.undoBtn, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Pressable
        onPress={onPressUndo}
        onPressIn={fadeInUndo}
        onPressOut={fadeOutUndo}
      >
        <Animated.View style={{
          ...styles.undoBtn,
          opacity: btnOpacity.undoBtn
        }}>
          <Image
            style={styles.undoBtnImg}
            source={require('../../assets/undo-icon.png')}
            resizeMode='contain'
          />
        </Animated.View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  undoBtn: {
    marginRight: -5,
    // marginHorizontal: windowHeight > 800 ? 7 : 5,
  },
  undoBtnImg: {
    height: windowHeight > 800 ? 35 : 30,
    // maxWidth: 70,
    // width: 70,
  },
})

export default UndoBtn;