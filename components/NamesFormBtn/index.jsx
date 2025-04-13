import { StyleSheet, Pressable, Text, View, Animated } from 'react-native';
import { Colors } from '../styleVariables';

//Удалить компонент

function NamesFormBtn({ title, handleConfirmCLick }) {
  const btnAnimatedValue = new Animated.Value(100);
  const btnColor = btnAnimatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.accentHover, Colors.accent]
  });

  const fadeInBtn = () => {
    Animated.timing(btnAnimatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutBtn = () => {
    Animated.timing(btnAnimatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={fadeInBtn} onPressOut={fadeOutBtn} onPress={handleConfirmCLick} >
      <Animated.View style={{
        ...styles.namesFormBtn,
        backgroundColor: btnColor
      }}>
        <Text style={styles.namesFormBtnText}>
          {title}
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