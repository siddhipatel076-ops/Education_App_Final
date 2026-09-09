import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Home = ({ route }) => {

  const { username } = route.params || {};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Home Page
      </Text>

      <Text style={styles.welcome}>
        Welcome {username}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  welcome: {
    fontSize: 20,
  },

});

export default Home;