import React from 'react';
import {Text, View, useColorScheme, SafeAreaView} from 'react-native';

// const StyledText = styled(Text);
// const StyledView = styled(View);


export default function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-1 text-black bg-orange-400 dark:text-white dark:bg-black">
      <View className="items-center  my-auto">
        <Text className=""> This is text</Text>
      </View>
    </SafeAreaView>
  );
}
