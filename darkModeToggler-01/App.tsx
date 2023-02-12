import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

const App = (): JSX.Element => {
  // const isDarkMode = useColorScheme() === 'dark';

  const [bgColor, setbgColor] = useState('white');
  const [textColor, settextColor] = useState('black');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: bgColor,
          color: textColor,
        }}>
        <TouchableOpacity
          style={styles.centerBtn}
          onPress={() => {
            bgColor == 'white'
              ? (setbgColor('black'), settextColor('white'))
              : (setbgColor('white'), settextColor('black'));
          }}>
          <View style={styles.btn}>
            <Text>Toggle Dark Mode</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
  },
  btn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
export default App;
