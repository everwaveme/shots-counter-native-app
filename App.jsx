import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './components/styleVariables';
import { useFonts } from 'expo-font';
import Players from './components/Players';
import Stats from './components/Stats';
import { useEffect } from 'react';

// eas build --platform android
// eas build -p android --profile preview

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    OnestRegular: require('./assets/fonts/Onest-Regular.ttf'),
    OnestMedium: require('./assets/fonts/Onest-Medium.ttf'),
    OnestSemiBold: require('./assets/fonts/Onest-SemiBold.ttf'),
    OnestBold: require('./assets/fonts/Onest-Bold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error])

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container} edges={['top']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Players />
          <Stats />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: Colors.dark,
  },
});

export default App;