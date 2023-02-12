import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Heading</Text>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}
