import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../styleVariables';
import Counter from '../Counter';

//CRL + M -- перезапуск приложения
//условный рендеринг && -- полезно

function Stats() {
  //First player stats state
  const [firstPlayerStats, setFirstPlayerStats] = useState({
    potSuccess: {
      potted: 0,
      allShots: 0,
    },
    longPotSuccess: {
      potted: 0,
      allShots: 0,
    },
    restPotSuccess: {
      potted: 0,
      allShots: 0,
    },
    safetySuccess: {
      success: 0,
      allShots: 0,
    }
  });

  const [firstPlayerPer, setFirstPlayerPer] = useState({
    potSuccessPer: 0,
    longPotSuccessPer: 0,
    restPotSuccessPer: 0,
    safetySuccessPer: 0,
  });

  useEffect(() => {
    setFirstPlayerPer({
      ...firstPlayerPer,
      potSuccessPer: firstPlayerStats.potSuccess.potted / firstPlayerStats.potSuccess.allShots * 100 || 0,
      longPotSuccessPer: firstPlayerStats.longPotSuccess.potted / firstPlayerStats.longPotSuccess.allShots * 100 || 0,
      restPotSuccessPer: firstPlayerStats.restPotSuccess.potted / firstPlayerStats.restPotSuccess.allShots * 100 || 0,
      safetySuccessPer: firstPlayerStats.safetySuccess.success / firstPlayerStats.safetySuccess.allShots * 100 || 0,
    });
  }, [firstPlayerStats]);

  //Second player stats state
  const [secondPlayerStats, setSecondPlayerStats] = useState({
    potSuccess: {
      potted: 0,
      allShots: 0,
    },
    longPotSuccess: {
      potted: 0,
      allShots: 0,
    },
    restPotSuccess: {
      potted: 0,
      allShots: 0,
    },
    safetySuccess: {
      success: 0,
      allShots: 0,
    }
  });

  const [secondPlayerPer, setSecondPlayerPer] = useState({
    potSuccessPer: 0,
    longPotSuccessPer: 0,
    restPotSuccessPer: 0,
    safetySuccessPer: 0,
  });

  useEffect(() => {
    setSecondPlayerPer({
      ...secondPlayerPer,
      potSuccessPer: secondPlayerStats.potSuccess.potted / secondPlayerStats.potSuccess.allShots * 100 || 0,
      longPotSuccessPer: secondPlayerStats.longPotSuccess.potted / secondPlayerStats.longPotSuccess.allShots * 100 || 0,
      restPotSuccessPer: secondPlayerStats.restPotSuccess.potted / secondPlayerStats.restPotSuccess.allShots * 100 || 0,
      safetySuccessPer: secondPlayerStats.safetySuccess.success / secondPlayerStats.safetySuccess.allShots * 100 || 0,
    });
  }, [secondPlayerStats]);

  return (
    <View style={styles.container}>

    {/* //POTTED SUCCESS */}
      <View style={styles.statsTextWrap}>
        <Text style={styles.statsText}>
          Pot Success
        </Text>
      </View>

      <View style={styles.statsCard}>

        <Counter
          percentage={firstPlayerPer.potSuccessPer.toFixed(2)}
          potted={firstPlayerStats.potSuccess.potted}
          allShots={firstPlayerStats.potSuccess.allShots}
          onPressPotted={() => {
            setFirstPlayerStats({
              ...firstPlayerStats,
              potSuccess: {
                ...firstPlayerStats.potSuccess,
                potted: firstPlayerStats.potSuccess.potted + 1,
                allShots: firstPlayerStats.potSuccess.allShots + 1,
              }
            });
          }}
          onPressMissed={() => {
            setFirstPlayerStats({
              ...firstPlayerStats,
              potSuccess: {
                ...firstPlayerStats.potSuccess,
                allShots: firstPlayerStats.potSuccess.allShots + 1,
              }
            });
          }}
        />

        <Counter
          percentage={secondPlayerPer.potSuccessPer.toFixed(2)}
          potted={secondPlayerStats.potSuccess.potted}
          allShots={secondPlayerStats.potSuccess.allShots}
          onPressPotted={() => {
            setSecondPlayerStats({
              ...secondPlayerStats,
              potSuccess: {
                ...secondPlayerStats.potSuccess,
                potted: secondPlayerStats.potSuccess.potted + 1,
                allShots: secondPlayerStats.potSuccess.allShots + 1,
              }
            });
          }}
          onPressMissed={() => {
            setSecondPlayerStats({
              ...secondPlayerStats,
              potSuccess: {
                ...secondPlayerStats.potSuccess,
                allShots: secondPlayerStats.potSuccess.allShots + 1,
              }
            });
          }}
        />

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
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.accent,
    textAlign: 'center',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Stats;