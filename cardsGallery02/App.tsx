import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ElevatedCard from './Components/ElevatedCard';
import FancyCards from './Components/FancyCards';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}
