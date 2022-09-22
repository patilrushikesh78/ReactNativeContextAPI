import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import ThemeProvider from './context/ThemeContext';
import {Navigator} from './navigation/app-routining';

const App = () => {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
