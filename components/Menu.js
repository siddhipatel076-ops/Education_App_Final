import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  Ionicons,
} from '@expo/vector-icons';

const Menu = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color="#2196F3"
        />

        <Text style={styles.menuText}>
          Home
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Course')}
      >
        <Ionicons
          name="book-outline"
          size={24}
          color="#4CAF50"
        />

        <Text style={styles.menuText}>
          Course
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('UserData')}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color="#FF9800"
        />

        <Text style={styles.menuText}>
          User
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('About')}
      >
        <Ionicons
          name="information-circle-outline"
          size={24}
          color="#9C27B0"
        />

        <Text style={styles.menuText}>
          About
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Contact')}
      >
        <Ionicons
          name="call-outline"
          size={24}
          color="#F44336"
        />

        <Text style={styles.menuText}>
          Contact
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  menuButton: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },

  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 3,
  },

});

export default Menu;