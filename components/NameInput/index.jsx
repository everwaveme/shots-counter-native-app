import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '../styleVariables';

function NameInput({ value, placeholder, onChangeText }) {

  return (
    <TextInput
      style={styles.nameInput}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Colors.semiLight}
      maxLength={18}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  nameInput: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.light,
    textAlign: 'center',
  }
});

export default NameInput;