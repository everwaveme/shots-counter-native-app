import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styleVariables';
import NamesFormInput from '../NamesFormInput';
import NamesFormBtn from '../NamesFormBtn';
import Error from '../Error';

//CRL + M -- перезапуск приложения
//условный рендеринг && -- полезно

//ВЕРНУТЬ КНОПКУ

function NamesForm() {
  const [isNamesConfirmed, setIsNamesConfirmed] = useState(false);

  const [isConfirmError, setIsConfirmError] = useState(false);

  const handleConfirmCLick = () => {
    //if для Error
    setIsConfirmError(true);
  };

  return (
    <View style={styles.container}>
      {isConfirmError && <Error error="Please, enter players' names!" />}
      
      <View style={styles.namesForm}>
        <Text style={styles.namesFormTitle}>
          Who will play?
        </Text>
        <View style={styles.namesFormInputWrap}>
          <NamesFormInput placeholder='Player 1' />
          <NamesFormInput placeholder='Player 2' />
          <NamesFormBtn title='Confirm' handleConfirmCLick={handleConfirmCLick} />
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