import { StyleSheet, TextInput } from 'react-native';
import { Colors, windowHeight } from '../styleVariables';

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
    fontSize: windowHeight > 800 ? 16 : 14,
    fontFamily: 'OnestBold',
    color: Colors.light,
    textAlign: 'center',
  }
});

export default NameInput;