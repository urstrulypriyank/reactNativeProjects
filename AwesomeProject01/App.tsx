import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          isDarkMode
            ? ((styles.container.backgroundColor = 'slate'),
              (styles.container.color = 'black'))
            : styles.light
        }>
        <Text style={styles.txt}>hi this is text</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  txt: {
    fontWeight: 'bold',
  },
  dark: {
    // color: 'white',
    backgroundColor: 'black',
  },
  light: {},
});
export default App;
