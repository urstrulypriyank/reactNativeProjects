import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import { ListItem } from 'react-native-elements';

export default function MyCardComponent() {
  const [userPostData, setUserPostData] = useState([]);
  const [dataFetchStatus, setDataFetchStatus] = useState(true);

  const myUserData = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/urstrulypriyank/userDataSet/main/socialPostDb.json',
      );
      const myUserData = await response.json();
      setUserPostData(myUserData);
      console.log(myUserData);
      setDataFetchStatus(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    myUserData();
    // console.log('yay');
  }, []);
  return (
    <FlatList
      data={userPostData}
      renderItem={({item}) => {
        return (
          <View style={myCard.cardWrapper} key={item.id}>
            <View style={myCard.cardHeadder}>
              <Image
                style={myCard.cardDp}
                source={{uri: item.userprofilepicture}}
              />
              <Text style={myCard.userName}>{item.username}</Text>
            </View>
            <Image source={{uri: item.userpost}} style={myCard.cardImg} />
            <View style={myCard.cardFooter}>
              <Image
                source={require('../Images/heart.png')}
                style={myCard.footerPostIcons}
              />
              <Image
                source={require('../Images/chat-bubble.png')}
                style={myCard.footerPostIcons}
              />
              <Image
                source={require('../Images/send.png')}
                style={myCard.footerPostIcons}
              />
              <Image
                source={require('../Images/save-instagram.png')}
                style={[myCard.footerPostIcons, myCard.savePostIcon]}
              />
            </View>
            <Text style={myCard.DescriptionTextContainer}>
              <Text style={myCard.name}>Priyank Rai</Text>
              <Text style={myCard.name_description_text}>
                {item.userpostdescription}
              </Text>
            </Text>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
}
const myCard = StyleSheet.create({
  cardWrapper: {
    margin: 10,
    width: '95%',
    height: 550,
    borderRadius: 20,
    borderColor: 'black',
    // borderTopWidth: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: 'grey',
    backgroundColor: 'white',
  },
  cardImg: {
    width: '100%',
    aspectRatio: 1,
  },
  cardDp: {
    borderRadius: 100,
    width: 40,
    height: 40,
    margin: 10,
  },
  cardHeadder: {
    flex: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  DescriptionTextContainer: {
    color: 'black',
    padding: 10,
  },
  name: {},
  name_description_text: {},
  userName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  cardFooter: {
    flex: 0,
    flexDirection: 'row',
  },
  footerPostIcons: {width: 30, height: 30, margin: 10},
  savePostIcon: {
    marginLeft: 'auto',
  },
});
