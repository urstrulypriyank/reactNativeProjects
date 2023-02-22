import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
export default function MiddleBody() {
  return (
    <View className="grow">
      <View className="flex flex-1 justify-center">
        <Text className="text-center font-extrabold text-3xl">Instagram</Text>
        <TextInput
          className="bg-gray-600 m-4 px-4"
          placeholder="Phone number, email or username"></TextInput>
        <TextInput
          className="bg-gray-600 mx-4 mt-3 px-4"
          placeholder="Password"
          secureTextEntry={true}></TextInput>
        <TouchableOpacity>
          <View className="p-3 bg-blue-500 m-4 items-center rounded-xl">
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
        <View className="justify-center flex-row">
          <Text>Forgot your login details</Text>
          <Text className="font-bold text-white">Get help logging in</Text>
        </View>
        <View className="my-4 flex flex-row items-center p-2 ">
          <View className="grow h-[0.5px] bg-white"></View>
          <Text className="grow-0 text-center">OR</Text>
          <View className="grow h-[0.5px] bg-white"></View>
        </View>
        <View className="flex-row justify-center space-x-2 m-4">
          <Image source={require('../../facebook.png')} />
          <Text className="font-extrabold text-blue-500 ">
            Login with Facebook
          </Text>
        </View>
      </View>
    </View>
  );
}
