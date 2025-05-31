import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors, windowHeight } from '../styleVariables';
import useHistory from "../../hooks/useHistory";
import Counter from '../Counter';
import AllPottedBalls from '../AllPottedBalls';
import UndoBtn from '../UndoBtn';
import ClearBtn from '../ClearBtn';

function Stats() {
  const [stats, setStats, undo, redo, history, index] = useHistory({
    firstPlayer: {
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
    },

    secondPlayer: {
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
    }
  });

  const [percentage, setPercentage] = useState({
    firstPlayerPer: {
      potSuccessPer: 0,
      longPotSuccessPer: 0,
      restPotSuccessPer: 0,
      safetySuccessPer: 0,
    },
    secondPlayerPer: {
      potSuccessPer: 0,
      longPotSuccessPer: 0,
      restPotSuccessPer: 0,
      safetySuccessPer: 0,
    }
  });

  useEffect(() => {
    setPercentage({
      ...percentage,
      firstPlayerPer: {
        potSuccessPer: stats.firstPlayer.potSuccess.potted / stats.firstPlayer.potSuccess.allShots * 100 || 0,
        longPotSuccessPer: stats.firstPlayer.longPotSuccess.potted / stats.firstPlayer.longPotSuccess.allShots * 100 || 0,
        restPotSuccessPer: stats.firstPlayer.restPotSuccess.potted / stats.firstPlayer.restPotSuccess.allShots * 100 || 0,
        safetySuccessPer: stats.firstPlayer.safetySuccess.success / stats.firstPlayer.safetySuccess.allShots * 100 || 0,
      },
      secondPlayerPer: {
        potSuccessPer: stats.secondPlayer.potSuccess.potted / stats.secondPlayer.potSuccess.allShots * 100 || 0,
        longPotSuccessPer: stats.secondPlayer.longPotSuccess.potted / stats.secondPlayer.longPotSuccess.allShots * 100 || 0,
        restPotSuccessPer: stats.secondPlayer.restPotSuccess.potted / stats.secondPlayer.restPotSuccess.allShots * 100 || 0,
        safetySuccessPer: stats.secondPlayer.safetySuccess.success / stats.secondPlayer.safetySuccess.allShots * 100 || 0,
      }
    });
  }, [stats]);

  const clearStats = () => {
    setStats(history[0]);
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
            percentage={percentage.firstPlayerPer.potSuccessPer.toFixed(2)}
            potted={stats.firstPlayer.potSuccess.potted}
            allShots={stats.firstPlayer.potSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    potted: stats.firstPlayer.potSuccess.potted + 1,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  }
                }
              });
            }}
          />

          <Counter
            percentage={percentage.secondPlayerPer.potSuccessPer.toFixed(2)}
            potted={stats.secondPlayer.potSuccess.potted}
            allShots={stats.secondPlayer.potSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    potted: stats.secondPlayer.potSuccess.potted + 1,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  }
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
            percentage={percentage.firstPlayerPer.longPotSuccessPer.toFixed(2)}
            potted={stats.firstPlayer.longPotSuccess.potted}
            allShots={stats.firstPlayer.longPotSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    potted: stats.firstPlayer.potSuccess.potted + 1,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  },
                  longPotSuccess: {
                    ...stats.firstPlayer.longPotSuccess,
                    potted: stats.firstPlayer.longPotSuccess.potted + 1,
                    allShots: stats.firstPlayer.longPotSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  },
                  longPotSuccess: {
                    ...stats.firstPlayer.longPotSuccess,
                    allShots: stats.firstPlayer.longPotSuccess.allShots + 1,
                  }
                }
              });
            }}
          />

          <Counter
            percentage={percentage.secondPlayerPer.longPotSuccessPer.toFixed(2)}
            potted={stats.secondPlayer.longPotSuccess.potted}
            allShots={stats.secondPlayer.longPotSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    potted: stats.secondPlayer.potSuccess.potted + 1,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  },
                  longPotSuccess: {
                    ...stats.secondPlayer.longPotSuccess,
                    potted: stats.secondPlayer.longPotSuccess.potted + 1,
                    allShots: stats.secondPlayer.longPotSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  },
                  longPotSuccess: {
                    ...stats.secondPlayer.longPotSuccess,
                    allShots: stats.secondPlayer.longPotSuccess.allShots + 1,
                  }
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
            percentage={percentage.firstPlayerPer.restPotSuccessPer.toFixed(2)}
            potted={stats.firstPlayer.restPotSuccess.potted}
            allShots={stats.firstPlayer.restPotSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    potted: stats.firstPlayer.potSuccess.potted + 1,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  },
                  restPotSuccess: {
                    ...stats.firstPlayer.restPotSuccess,
                    potted: stats.firstPlayer.restPotSuccess.potted + 1,
                    allShots: stats.firstPlayer.restPotSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  potSuccess: {
                    ...stats.firstPlayer.potSuccess,
                    allShots: stats.firstPlayer.potSuccess.allShots + 1,
                  },
                  restPotSuccess: {
                    ...stats.firstPlayer.restPotSuccess,
                    allShots: stats.firstPlayer.restPotSuccess.allShots + 1,
                  }
                }
              });
            }}
          />

          <Counter
            percentage={percentage.secondPlayerPer.restPotSuccessPer.toFixed(2)}
            potted={stats.secondPlayer.restPotSuccess.potted}
            allShots={stats.secondPlayer.restPotSuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    potted: stats.secondPlayer.potSuccess.potted + 1,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  },
                  restPotSuccess: {
                    ...stats.secondPlayer.restPotSuccess,
                    potted: stats.secondPlayer.restPotSuccess.potted + 1,
                    allShots: stats.secondPlayer.restPotSuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  potSuccess: {
                    ...stats.secondPlayer.potSuccess,
                    allShots: stats.secondPlayer.potSuccess.allShots + 1,
                  },
                  restPotSuccess: {
                    ...stats.secondPlayer.restPotSuccess,
                    allShots: stats.secondPlayer.restPotSuccess.allShots + 1,
                  }
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
            percentage={percentage.firstPlayerPer.safetySuccessPer.toFixed(2)}
            potted={stats.firstPlayer.safetySuccess.success}
            allShots={stats.firstPlayer.safetySuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  safetySuccess: {
                    ...stats.firstPlayer.safetySuccess,
                    success: stats.firstPlayer.safetySuccess.success + 1,
                    allShots: stats.firstPlayer.safetySuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                firstPlayer: {
                  ...stats.firstPlayer,
                  safetySuccess: {
                    ...stats.firstPlayer.safetySuccess,
                    allShots: stats.firstPlayer.safetySuccess.allShots + 1,
                  }
                }
              });
            }}
          />

          <Counter
            percentage={percentage.secondPlayerPer.safetySuccessPer.toFixed(2)}
            potted={stats.secondPlayer.safetySuccess.success}
            allShots={stats.secondPlayer.safetySuccess.allShots}
            onPressPotted={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  safetySuccess: {
                    ...stats.secondPlayer.safetySuccess,
                    success: stats.secondPlayer.safetySuccess.success + 1,
                    allShots: stats.secondPlayer.safetySuccess.allShots + 1,
                  }
                }
              });
            }}
            onPressMissed={() => {
              setStats({
                ...stats,
                secondPlayer: {
                  ...stats.secondPlayer,
                  safetySuccess: {
                    ...stats.secondPlayer.safetySuccess,
                    allShots: stats.secondPlayer.safetySuccess.allShots + 1,
                  }
                }
              });
            }}
          />
        </View>
      </View>

      {/* ALL POTTED BALLS */}
      <AllPottedBalls
        firtsPlayerPottedSum={stats.firstPlayer.potSuccess.potted}
        secondPlayerPottedSum={stats.secondPlayer.potSuccess.potted}
      />

      {/* BUTTONS */}
      <View style={styles.statsBtnWrap}>
        <UndoBtn
          onPressUndo={undo}
        />
        <ClearBtn 
          onPressClear={clearStats}
        />
      </View>
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
    fontFamily: 'OnestSemiBold',
    color: Colors.accent,
    textAlign: 'center',
  },
  statsCounterWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
  },
  statsBtnWrap: {
    marginTop: windowHeight > 800 ? 20 : 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
});

export default Stats;