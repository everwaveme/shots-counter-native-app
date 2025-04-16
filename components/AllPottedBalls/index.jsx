import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styleVariables';

function AllPottedBalls({ firtsPlayerPottedSum, secondPlayerPottedSum }) {
  return (
    <View style={styles.AllPottedBalls}>
      <View style={styles.AllPottedBallsSumWrap}>
        <Text style={styles.AllPottedBallsSum}>
          {firtsPlayerPottedSum}
        </Text>
      </View>

      <View style={styles.AllPottedBallsTextWrap}>
        <Text style={styles.AllPottedBallsText}>
          All Potted Balls
        </Text>
      </View>

      <View style={styles.AllPottedBallsSumWrap}>
        <Text style={styles.AllPottedBallsSum}>
          {secondPlayerPottedSum}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AllPottedBalls: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllPottedBallsSumWrap: {
    flexBasis: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllPottedBallsSum: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSansBold',
    color: Colors.light,
    textAlign: 'center',
  },
  AllPottedBallsTextWrap: {
    flexBasis: '30%',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllPottedBallsText: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSansSemiBold',
    color: Colors.accent,
    textAlign: 'center',
  }
});

export default AllPottedBalls;