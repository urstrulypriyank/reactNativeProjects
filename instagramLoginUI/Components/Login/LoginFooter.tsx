import {View, Text} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';

const SView = styled(View);
const SText = styled(Text);
export default function LoginFooter() {
  return (
    <SView className=" grow-0 mb-4">
      <SView className="border-white border-t opacity-30 p-2"></SView>
      <SView className="flex-row justify-center mb-4 ">
        <SText className='opacity-50'>Don't have an account </SText>
        <SText className="opacity-100 font-bold">Sign Up</SText>
      </SView>
    </SView>
  );
}
