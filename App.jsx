import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './components/styleVariables';
import Players from './components/Players';
import Stats from './components/Stats';

function App() {

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container} edges={['top']}>
        <Players />
        <Stats />
      </SafeAreaView>
    </SafeAreaProvider>
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