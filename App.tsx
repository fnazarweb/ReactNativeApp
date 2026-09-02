import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage/index';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <HomePage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
