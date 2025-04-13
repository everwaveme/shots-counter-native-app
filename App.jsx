import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './components/styleVariables';
import Players from './components/Players';
import Stats from './components/Stats';

function App() {
  return (
    <View style={styles.container}>
      <Players />
      <Stats />
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

export default App;