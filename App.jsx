import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import NamesForm from './components/NamesForm';

function App() {
  return (
    <>
      <NamesForm />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;