import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './components/styleVariables';
import { useFonts } from 'expo-font';
import Players from './components/Players';
import Stats from './components/Stats';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    PlusJakartaSansRegular: require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    PlusJakartaSansMedium: require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    PlusJakartaSansSemiBold: require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    PlusJakartaSansBold: require('./assets/fonts/PlusJakartaSans-Bold.ttf')
  });

  useEffect(() => {
    if(loaded) {
      SplashScreen.hideAsync();
    }
  },[loaded]);

  useEffect(() => {
    if(error) {
      throw error;
    }
  },[error])

  if(!loaded) {
    return null;
  }

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
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: Colors.dark,
  },
});

export default App;