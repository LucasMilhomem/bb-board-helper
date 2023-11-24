import React from 'react';

import Home from './src/view/Home';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
}); 

export default App;
