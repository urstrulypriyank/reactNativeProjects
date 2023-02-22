import {TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import {styled} from 'nativewind';
import {ChevronDownIcon} from 'react-native-heroicons/solid';

export default function LoginHeadder() {
  const SView = styled(View);
  const SText = styled(Text);
  const STouchableOpacity = styled(TouchableOpacity);
  const SChevronDownIcon = styled(ChevronDownIcon);
  const [currentLanguage, setCurrentLang] = useState('English (India)');
  return (
    <SView className=" grow-0 mt-4 ">
      <STouchableOpacity className="flex-row justify-center items-center">
        <SText className="text-center p-3 ">{currentLanguage}</SText>
        <SChevronDownIcon className="color-white justify-center" size={20} />
      </STouchableOpacity>
    </SView>
  );
}
