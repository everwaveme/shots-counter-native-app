import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../styleVariables';
import NamesFormBtn from '../NamesFormBtn';

//CRL + D -- перезапуск приложения
//условный рендеринг && -- полезно

function NamesForm() {

  return (
    <View style={styles.container}>
      <View style={styles.namesForm}>
        <Text style={styles.namesFormTitle}>
          Who will play?
        </Text>
        <View style={styles.namesFormInputWrap}>
          <TextInput
            style={styles.namesFormInput}
            placeholder='Player 1'
            placeholderTextColor={Colors.semiLight}
          />
          <TextInput
            style={styles.namesFormInput}
            placeholder='Player 2'
            placeholderTextColor={Colors.semiLight}
          />
          <NamesFormBtn />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 70,
    justifyContent: 'center',
    backgroundColor: Colors.dark,
  },
  namesForm: {
    alignItems: 'center',
    gap: 30,
  },
  namesFormTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: Colors.light,
  },
  namesFormInputWrap: {
    alignSelf: 'stretch',
    gap: 15,
  },
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

export default NamesForm;