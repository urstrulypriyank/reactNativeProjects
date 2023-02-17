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
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
            labore, molestiae porro est in placeat esse dignissimos quas fugiat
            a iusto odio recusandae voluptas voluptates cupiditate id impedit
            nam.
          </Text>
          <Text style={styles.footer}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
  },
  cardImg: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperCard: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardBody: {
    backgroundColor: 'grey',
  },
  cardBodyTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
    paddingVertical: 10,
  },
  cardDescription: {
    marginLeft: 6,
    paddingBottom: 10,
  },
  footer: {
    marginLeft: 6,
    paddingBottom: 10,
    fontWeight: 600,
    fontSize: 14,
  },
});
