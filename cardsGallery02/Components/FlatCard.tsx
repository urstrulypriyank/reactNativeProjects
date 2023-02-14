import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={[styles.cardWrapper]}>
        <TouchableOpacity>
          <View style={[styles.card, styles.card1]}>
            <Text>box-1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card, styles.card2]}>
            <Text>box-2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card, styles.card3]}>
            <Text>box-3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card, styles.card3]}>
            <Text>box-3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card, styles.card3]}>
            <Text>box-3</Text>
          </View>
        </TouchableOpacity>
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
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 4,
    width: "20%",
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {backgroundColor: 'green'},
  card3: {backgroundColor: 'blue'},
});
