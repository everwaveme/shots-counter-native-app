import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styleVariables';
import Players from '../Players';

function Stats() {
  return(
    <View style={styles.container}>
      <Players />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: Colors.dark,
  },
});

export default Stats;