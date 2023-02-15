import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.wrapperCard, styles.card]}>
        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyTitle}>The title</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
            labore, molestiae porro est in placeat esse dignissimos quas fugiat
            a iusto odio recusandae voluptas voluptates cupiditate id impedit
            nam.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  wrapperCard: {
    backgroundColor: 'grey',
    // borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  card: {},
  cardImg: {
    // width: '100%',
    height: 180,
    margin: 6,
  },
  cardBody: {
    position: 'absolute',
    

  },
  cardBodyTitle: {
    textAlign: 'center',
  },
});
