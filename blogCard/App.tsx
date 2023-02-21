import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyCardComponent from './Components/MyCardComponent';
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      {/* <ScrollView style={{backgroundColor: 'white'}}> */}
      {/* </ScrollView> */}
      <MyCardComponent />
      {/* <LoginScreen /> */}
    </SafeAreaView>
  );
}
