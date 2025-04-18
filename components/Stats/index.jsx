import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors, windowHeight } from '../styleVariables';
import Counter from '../Counter';
import AllPottedBalls from '../AllPottedBalls';
import ResetButtons from '../ResetButtons';

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

    //Reset buttons
    const resetFirstPlayerStats = () => {
      setFirstPlayerStats({
        ...firstPlayerStats,
        potSuccess: {
          ...firstPlayerStats.potSuccess,
          potted: 0,
          allShots: 0,
        },
        longPotSuccess: {
          ...firstPlayerStats.longPotSuccess,
          potted: 0,
          allShots: 0,
        },
        restPotSuccess: {
          ...firstPlayerStats.restPotSuccess,
          potted: 0,
          allShots: 0,
        },
        safetySuccess: {
          ...firstPlayerStats.safetySuccess,
          success: 0,
          allShots: 0,
        },
      });
    };
  
    const resetSecondPlayerStats = () => {
      setSecondPlayerStats({
        ...secondPlayerStats,
        potSuccess: {
          ...secondPlayerStats.potSuccess,
          potted: 0,
          allShots: 0,
        },
        longPotSuccess: {
          ...secondPlayerStats.longPotSuccess,
          potted: 0,
          allShots: 0,
        },
        restPotSuccess: {
          ...secondPlayerStats.restPotSuccess,
          potted: 0,
          allShots: 0,
        },
        safetySuccess: {
          ...secondPlayerStats.safetySuccess,
          success: 0,
          allShots: 0,
        },
      });
    };
  
    const resetAllStats = () => {
      resetFirstPlayerStats();
      resetSecondPlayerStats();
    };

  return (
    <View style={styles.container}>

      {/* POTTED SUCCESS */}
      <View style={styles.statsField}>

        <View style={styles.statsTextWrap}>
          <Text style={styles.statsText}>
            Pot Success
          </Text>
        </View>

        <View style={styles.statsCounterWrap}>

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

      {/* LONG POT SUCCESS */}
      <View style={styles.statsField}>

        <View style={styles.statsTextWrap}>
          <Text style={styles.statsText}>
            Long Pot Success
          </Text>
        </View>

        <View style={styles.statsCounterWrap}>

          <Counter
            percentage={firstPlayerPer.longPotSuccessPer.toFixed(2)}
            potted={firstPlayerStats.longPotSuccess.potted}
            allShots={firstPlayerStats.longPotSuccess.allShots}
            onPressPotted={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                potSuccess: {
                  ...firstPlayerStats.potSuccess,
                  potted: firstPlayerStats.potSuccess.potted + 1,
                  allShots: firstPlayerStats.potSuccess.allShots + 1,
                },
                longPotSuccess: {
                  ...firstPlayerStats.longPotSuccess,
                  potted: firstPlayerStats.longPotSuccess.potted + 1,
                  allShots: firstPlayerStats.longPotSuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                potSuccess: {
                  ...firstPlayerStats.potSuccess,
                  allShots: firstPlayerStats.potSuccess.allShots + 1,
                },
                longPotSuccess: {
                  ...firstPlayerStats.longPotSuccess,
                  allShots: firstPlayerStats.longPotSuccess.allShots + 1,
                }
              });
            }}
          />

          <Counter
            percentage={secondPlayerPer.longPotSuccessPer.toFixed(2)}
            potted={secondPlayerStats.longPotSuccess.potted}
            allShots={secondPlayerStats.longPotSuccess.allShots}
            onPressPotted={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                potSuccess: {
                  ...secondPlayerStats.potSuccess,
                  potted: secondPlayerStats.potSuccess.potted + 1,
                  allShots: secondPlayerStats.potSuccess.allShots + 1,
                },
                longPotSuccess: {
                  ...secondPlayerStats.longPotSuccess,
                  potted: secondPlayerStats.longPotSuccess.potted + 1,
                  allShots: secondPlayerStats.longPotSuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                potSuccess: {
                  ...secondPlayerStats.potSuccess,
                  allShots: secondPlayerStats.potSuccess.allShots + 1,
                },
                longPotSuccess: {
                  ...secondPlayerStats.longPotSuccess,
                  allShots: secondPlayerStats.longPotSuccess.allShots + 1,
                }
              });
            }}
          />
        </View>
      </View>

      {/* REST POT SUCCESS */}
      <View style={styles.statsField}>

        <View style={styles.statsTextWrap}>
          <Text style={styles.statsText}>
            Rest Pot Success
          </Text>
        </View>

        <View style={styles.statsCounterWrap}>

          <Counter
            percentage={firstPlayerPer.restPotSuccessPer.toFixed(2)}
            potted={firstPlayerStats.restPotSuccess.potted}
            allShots={firstPlayerStats.restPotSuccess.allShots}
            onPressPotted={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                potSuccess: {
                  ...firstPlayerStats.potSuccess,
                  potted: firstPlayerStats.potSuccess.potted + 1,
                  allShots: firstPlayerStats.potSuccess.allShots + 1,
                },
                restPotSuccess: {
                  ...firstPlayerStats.restPotSuccess,
                  potted: firstPlayerStats.restPotSuccess.potted + 1,
                  allShots: firstPlayerStats.restPotSuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                potSuccess: {
                  ...firstPlayerStats.potSuccess,
                  allShots: firstPlayerStats.potSuccess.allShots + 1,
                },
                restPotSuccess: {
                  ...firstPlayerStats.restPotSuccess,
                  allShots: firstPlayerStats.restPotSuccess.allShots + 1,
                }
              });
            }}
          />

          <Counter
            percentage={secondPlayerPer.restPotSuccessPer.toFixed(2)}
            potted={secondPlayerStats.restPotSuccess.potted}
            allShots={secondPlayerStats.restPotSuccess.allShots}
            onPressPotted={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                potSuccess: {
                  ...secondPlayerStats.potSuccess,
                  potted: secondPlayerStats.potSuccess.potted + 1,
                  allShots: secondPlayerStats.potSuccess.allShots + 1,
                },
                restPotSuccess: {
                  ...secondPlayerStats.restPotSuccess,
                  potted: secondPlayerStats.restPotSuccess.potted + 1,
                  allShots: secondPlayerStats.restPotSuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                potSuccess: {
                  ...secondPlayerStats.potSuccess,
                  allShots: secondPlayerStats.potSuccess.allShots + 1,
                },
                restPotSuccess: {
                  ...secondPlayerStats.restPotSuccess,
                  allShots: secondPlayerStats.restPotSuccess.allShots + 1,
                }
              });
            }}
          />
        </View>
      </View>

      {/* SAFETY SUCCESS */}
      <View style={styles.statsField}>

        <View style={styles.statsTextWrap}>
          <Text style={styles.statsText}>
            Safety Success
          </Text>
        </View>

        <View style={styles.statsCounterWrap}>

          <Counter
            percentage={firstPlayerPer.safetySuccessPer.toFixed(2)}
            potted={firstPlayerStats.safetySuccess.success}
            allShots={firstPlayerStats.safetySuccess.allShots}
            onPressPotted={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                safetySuccess: {
                  ...firstPlayerStats.safetySuccess,
                  success: firstPlayerStats.safetySuccess.success + 1,
                  allShots: firstPlayerStats.safetySuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setFirstPlayerStats({
                ...firstPlayerStats,
                safetySuccess: {
                  ...firstPlayerStats.safetySuccess,
                  allShots: firstPlayerStats.safetySuccess.allShots + 1,
                }
              });
            }}
          />

          <Counter
            percentage={secondPlayerPer.safetySuccessPer.toFixed(2)}
            potted={secondPlayerStats.safetySuccess.success}
            allShots={secondPlayerStats.safetySuccess.allShots}
            onPressPotted={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                safetySuccess: {
                  ...secondPlayerStats.safetySuccess,
                  success: secondPlayerStats.safetySuccess.success + 1,
                  allShots: secondPlayerStats.safetySuccess.allShots + 1,
                }
              });
            }}
            onPressMissed={() => {
              setSecondPlayerStats({
                ...secondPlayerStats,
                safetySuccess: {
                  ...secondPlayerStats.safetySuccess,
                  allShots: secondPlayerStats.safetySuccess.allShots + 1,
                }
              });
            }}
          />
        </View>
      </View>

      {/* ALL POTTED BALLS */}
      <AllPottedBalls
        firtsPlayerPottedSum={firstPlayerStats.potSuccess.potted}
        secondPlayerPottedSum={secondPlayerStats.potSuccess.potted}
      />

      {/* RESET BUTTONS */}
      <ResetButtons 
        onPressFirstPlayerReset={resetFirstPlayerStats}
        onPressSecondPlayerReset={resetSecondPlayerStats}
        onPressAllReset={resetAllStats}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 10,
  },
  statsField: {
    paddingVertical: windowHeight > 800 ? 15 : 10,
  },
  statsTextWrap: {
    marginBottom: windowHeight > 800 ? 20 : 10,
  },
  statsText: {
    fontSize: windowHeight > 800 ? 16 : 14,
    fontFamily: 'PlusJakartaSansSemiBold',
    color: Colors.accent,
    textAlign: 'center',
  },
  statsCounterWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
  },
});

export default Stats;