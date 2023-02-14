import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
        <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
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
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 4,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    border: 4,
    borderColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'magenta',
  },
  cardElevated: {},
  card1: {
    backgroundColor: 'red',
  },
  card2: {backgroundColor: 'green'},
  card3: {backgroundColor: 'blue'},
});
