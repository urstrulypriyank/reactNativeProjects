import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';
import LoginHeadder from './Components/Login/LoginHeadder';
import LoginFooter from './Components/Login/LoginFooter';
import MiddleBody from './Components/Login/MiddleBody';

const SView = styled(View);

export default function App() {
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <SView className="flex flex-1">
        <LoginHeadder />
        <MiddleBody />
        <LoginFooter />
      </SView>
    </SafeAreaView>
  );
}
