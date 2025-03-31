import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styleVariables';
import { useState, useEffect } from 'react';

function Error({ error }) {
  const [isShowError, setIsShowError] = useState(false);

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
    <View style={styles.errorWrap}>
      <Text style={styles.errorText}>
        {error}
      </Text>
    </View>
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