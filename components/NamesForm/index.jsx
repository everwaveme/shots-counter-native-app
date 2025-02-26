import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
            placeholderTextColor={'#919191'}
          />
          <TextInput
            style={styles.namesFormInput}
            placeholder='Player 2'
            placeholderTextColor={'#919191'}
          />
          <Button
            style={styles.namesFormBtn}
            title="Confirm"
          />
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
    backgroundColor: '#1a1a1a',
  },
  namesForm: {
    alignItems: 'center',
    gap: 30,
  },
  namesFormTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
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
    color: '#fff',
    backgroundColor: '#232323',
    borderRadius: 10,
  },
  namesFormBtn: {

  }
});







export default NamesForm;