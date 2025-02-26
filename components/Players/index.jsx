import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

function Players() {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.infoBox}>
            <Text style={styles.name}>
              Judd Trump
            </Text>
          </View>

          <View style={styles.vsWrap}>
            <Image
              style={styles.vsIcon}
              source={require('../../assets/vs-icon.png')}
              resizeMode='contain'
            />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.name}>
              Neil Robertson
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    flexBasis: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
  },


  vsWrap: {
    flexBasis: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vsIcon: {
    width: 10,
    height: 10,
  }
});

export default Players;