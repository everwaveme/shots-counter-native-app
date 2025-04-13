import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native';
import { Colors } from '../styleVariables';
import { useState, useEffect } from 'react';

//Удалить компонент

function Error({ error }) {
  const [isShowError, setIsShowError] = useState(false);
  const errorAnimatedValue = new Animated.Value(-100);
  const onEnterError = () => {
    Animated.timing(errorAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };


  useEffect(() => {
    if (!error) {
      return;
    }
    setIsShowError(true);
    const errorTimer = setTimeout(() => {
      setIsShowError(false);
    }, 3000);
    return () => {
      clearTimeout(errorTimer);
    }
  }, [error])

  if (!isShowError) {
    return (
      <></>
    );
  }

  return (
    <Animated.View
      style={{
        ...styles.errorWrap,
        transform: [
          { translateY: errorAnimatedValue }
        ]
      }}
      onLayout={onEnterError}
    >
      <Text style={styles.errorText}>
        {error}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  errorWrap: {
    position: 'absolute',
    top: 50,
    padding: 10,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.error,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.light,
    textAlign: 'center',
  }
});

export default Error;