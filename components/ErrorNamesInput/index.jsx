import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styleVariables';

function ErrorNamesInput({ text }) {

  return (
    <View style={styles.errorWrap}>
      <Text style={styles.errorText}>
        {text}
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

export default ErrorNamesInput;