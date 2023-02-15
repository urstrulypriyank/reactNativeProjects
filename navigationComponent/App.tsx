import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyCardComponent from './Components/MyCardComponent';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <MyCardComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
