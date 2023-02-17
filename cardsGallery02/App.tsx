import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ElevatedCard from './Components/ElevatedCard';
import FancyCards from './Components/FancyCards';
import ActionCard from './Components/ActionCard';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#B3BCEB'}}>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}
