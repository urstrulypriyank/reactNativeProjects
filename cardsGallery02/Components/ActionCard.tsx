import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: String) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.actionCardContainer}>
      <Text style={styles.headingText}>Blog Card</Text>
      <TouchableOpacity onPress={() => openWebsite}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              What's New in Javascritp 22 - ES12
            </Text>
          </View>
          <Image
            source={{uri: 'https://source.unsplash.com/random?food'}}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusamus, aliquid quibusdam similique libero aliquam non
              obcaecati eum voluptates veniam ducimus, recusandae delectus rem
              dolores modi iste corrupti? Culpa, labore!
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.cardLink}
              onPress={() => openWebsite('https://github.com/urstrulypriyank')}>
              <Text>READ MORE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardLink}
              onPress={() =>
                openWebsite('https://linkedin.com/in/urstrulypriyank')
              }>
              <Text>Follow Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardLink}
              onPress={() => openWebsite('mailto:type2email@gmail.com')}>
              <Text>Mail us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardLink}
              onPress={() => openWebsite('tel:+9178987898')}>
              <Text>Call Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
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
  card: {
    width: 400,
    height: 350,
    // alignItems: 'center',
    borderRaidius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  elevatedCard: {
    backgroundColor: 'teal',
    elevation: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    padding: 8,
  },
  cardImage: {
    height: 200,
  },
  actionCardContainer: {
    marginBottom: 100,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardLink: {
    color: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    borderColor: 'black',

    backgroundColor: '#00ACAA',
  },
});
