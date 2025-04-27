import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';
import { windowHeight } from '../styleVariables';
import NameInput from '../NameInput';

function Players() {
  const [playerName, setPlayerName] = useState({
    firstPlayer: '',
    secondPlayer: '',
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.infoBox}>
            <NameInput
              placeholder='Player 1'
              value={playerName.firstPlayer}
              onChangeText={(text) => {
                setPlayerName({
                  ...playerName,
                  firstPlayer: text
                })
              }}
            />
          </View>

          <View style={styles.vsWrap}>
            <Image
              style={styles.vsIcon}
              source={require('../../assets/vs-icon.png')}
              resizeMode='contain'
            />
          </View>

          <View style={styles.infoBox}>
            <NameInput
              placeholder='Player 2'
              value={playerName.secondPlayer}
              onChangeText={(text) => {
                setPlayerName({
                  ...playerName,
                  secondPlayer: text
                })
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight > 800 ? 20 : 10,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    flexBasis: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsWrap: {
    flexBasis: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsIcon: {
    width: windowHeight > 800 ? 10 : 8,
    height: windowHeight > 800 ? 10 : 8,
  },
});

export default Players;