import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const NetflixCard = (props) => {
  return (
    <TouchableOpacity style={styles.card}>

      <Image
        source={require('../assets/images/education.png')}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          {props.title}
        </Text>

        <Text style={styles.description}>
          {props.description}
        </Text>

      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  card: {
    width: 180,
    marginRight: 15,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },

  content: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },

  description: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',
  },

});

export default NetflixCard;