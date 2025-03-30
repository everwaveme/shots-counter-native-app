import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet } from "react-native";
import { Colors } from '../styleVariables';

function NamesFormInput({ placeholder }) {
  return (
    <TextInput
      style={styles.namesFormInput}
      placeholder={placeholder}
      placeholderTextColor={Colors.semiLight}
    />
  );
}

const styles = StyleSheet.create({
  namesFormInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 600,
    color: Colors.light,
    backgroundColor: Colors.semiDark,
    borderRadius: 10,
  },
});

export default NamesFormInput;