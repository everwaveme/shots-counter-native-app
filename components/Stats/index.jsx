import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Colors } from '../styleVariables';

function Stats() {
  return (
    <View style={styles.container}>

      {/* //POTTED SUCCESS */}
      <View style={styles.statsTextWrap}>
        <Text style={styles.statsText}>
          Pot Success
        </Text>
      </View>

      <View style={styles.statsCard}>

        <View style={styles.statsPlayerWrap}>
          <View>
            <Text style={styles.statsPlayerText}>
              0% (0/0)
            </Text>
          </View>
          <View style={styles.statsPlayerBtnsWrap}>
            <View style={styles.statsPlayerPottedBtn}>
              <Image
                style={styles.statsPlayerPottedImg}
                source={require('../../assets/potted-icon.png')}
                resizeMode='contain'
              />
            </View>
            <View style={styles.statsPlayerMissedBtn}>
              <Image
                style={styles.statsPlayerMissedImg}
                source={require('../../assets/missed-icon.png')}
                resizeMode='contain'
              />
            </View>
          </View>
        </View>

        <View style={styles.statsPlayerWrap}>
          <View>
            <Text style={styles.statsPlayerText}>
              0% (0/0)
            </Text>
          </View>
          <View style={styles.statsPlayerBtnsWrap}>
            <View style={styles.statsPlayerPottedBtn}>
              <Image
                style={styles.statsPlayerPottedImg}
                source={require('../../assets/potted-icon.png')}
                resizeMode='contain'
              />
            </View>
            <View style={styles.statsPlayerMissedBtn}>
              <Image
                style={styles.statsPlayerMissedImg}
                source={require('../../assets/missed-icon.png')}
                resizeMode='contain'
              />
            </View>
          </View>
        </View>





      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  statsTextWrap: {
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.accent,
    textAlign: 'center',
  },

  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statsPlayerWrap: {
    flexBasis: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsPlayerText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.light,
    textAlign: 'center',
  },
  statsPlayerBtnsWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsPlayerPottedBtn: {
    marginRight: 15,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  statsPlayerPottedImg: {
    width: 50,
    height: 70,
  },

  statsPlayerMissedBtn: {
    
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  statsPlayerMissedImg: {
    width: 50,
    height: 70,
  }
});

export default Stats;