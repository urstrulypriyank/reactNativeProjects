import {View, Text, SafeAreaView, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const Fade = new Animated.Value(0);
  const rect2Circle = new Animated.Value(0);
  const spin = new Animated.Value(0);
  const chal = new Animated.Value(0);
  const spinValue = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    Animated.timing(spin, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [spin]);
  useEffect(() => {
    Animated.timing(chal, {
      toValue: 200,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [chal]);
  useEffect(() => {
    Animated.timing(Fade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [Fade]);

  useEffect(() => {
    Animated.function(rect2Circle, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [rect2Circle]);
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          backgroundColor: '#00CCBB',
          width: 100,
          height: 100,
          opacity: Fade,
        }}>
        <Text>Hi</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          marginVertical: 40,
          borderRadius: rect2Circle,
        }}></Animated.View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          transform: [{translateX: chal}, {rotate: spinValue}],
        }}></Animated.View>
    </SafeAreaView>
  );
}
