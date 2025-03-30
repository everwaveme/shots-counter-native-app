import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../styleVariables';
import NamesFormInput from '../NamesFormInput';
import NamesFormBtn from '../NamesFormBtn';
import ErrorNamesInput from '../ErrorNamesInput';

//CRL + D -- перезапуск приложения
//условный рендеринг && -- полезно

function NamesForm() {

  return (
    <View style={styles.container}>

      <ErrorNamesInput text="Please, enter players' names!"/>

      <View style={styles.namesForm}>
        <Text style={styles.namesFormTitle}>
          Who will play?
        </Text>
        <View style={styles.namesFormInputWrap}>
          <NamesFormInput placeholder='Player 1' />
          <NamesFormInput placeholder='Player 2' />
          <NamesFormBtn title='Confirm' />
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
});

export default NamesForm;