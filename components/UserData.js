import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const UserData = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {

    const getUserData = async () => {

      try {

        const data = [
          {
            id: '1',
            name: 'Siddhi Patel',
            email: 'siddhi@example.com',
            mobile: '+91 98765 43210',
            image: 'https://i.pravatar.cc/300?img=47',
          },
          {
            id: '2',
            name: 'Rahul Sharma',
            email: 'rahul@example.com',
            mobile: '+91 98765 12345',
            image: 'https://i.pravatar.cc/300?img=12',
          },
          {
            id: '3',
            name: 'Priya Shah',
            email: 'priya@example.com',
            mobile: '+91 98765 23456',
            image: 'https://i.pravatar.cc/300?img=32',
          },
          {
            id: '4',
            name: 'Aarav Mehta',
            email: 'aarav@example.com',
            mobile: '+91 98765 34567',
            image: 'https://i.pravatar.cc/300?img=11',
          },
          {
            id: '5',
            name: 'Neha Patel',
            email: 'neha@example.com',
            mobile: '+91 98765 45678',
            image: 'https://i.pravatar.cc/300?img=44',
          },
          {
            id: '6',
            name: 'Karan Joshi',
            email: 'karan@example.com',
            mobile: '+91 98765 56789',
            image: 'https://i.pravatar.cc/300?img=13',
          },
          {
            id: '7',
            name: 'Riya Mehta',
            email: 'riya@example.com',
            mobile: '+91 98765 67890',
            image: 'https://i.pravatar.cc/300?img=45',
          },
          {
            id: '8',
            name: 'Vivek Shah',
            email: 'vivek@example.com',
            mobile: '+91 98765 78901',
            image: 'https://i.pravatar.cc/300?img=14',
          },
          {
            id: '9',
            name: 'Ananya Patel',
            email: 'ananya@example.com',
            mobile: '+91 98765 89012',
            image: 'https://i.pravatar.cc/300?img=49',
          },
          {
            id: '10',
            name: 'Yash Desai',
            email: 'yash@example.com',
            mobile: '+91 98765 90123',
            image: 'https://i.pravatar.cc/300?img=15',
          },
          {
            id: '11',
            name: 'Kavya Shah',
            email: 'kavya@example.com',
            mobile: '+91 98765 11223',
            image: 'https://i.pravatar.cc/300?img=48',
          },
          {
            id: '12',
            name: 'Harsh Patel',
            email: 'harsh@example.com',
            mobile: '+91 98765 22334',
            image: 'https://i.pravatar.cc/300?img=16',
          },
        ];

        setUserData(data);

      } catch (error) {

        console.log('Student Data Error:', error);

      }

    };

    getUserData();

  }, []);

  const showUserData = ({ item }) => {

    return (
      <View style={styles.studentCard}>

        <View style={styles.imageContainer}>

          <Image
            source={{
              uri: item.image,
            }}
            style={styles.studentImage}
          />

        </View>

        <View style={styles.bioDataContainer}>

          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.email}>
            {item.email}
          </Text>

          <Text style={styles.mobile}>
            {item.mobile}
          </Text>

        </View>

      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Indian Students
      </Text>

      <FlatList
        data={userData}
        renderItem={showUserData}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  listContainer: {
    paddingHorizontal: 15,
  },

  studentCard: {
    width: 280,
    height: 350,
    backgroundColor: '#fff',
    marginRight: 15,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 4,
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },

  studentImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  bioDataContainer: {
    paddingHorizontal: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  email: {
    fontSize: 15,
    marginBottom: 12,
    color: '#555',
  },

  mobile: {
    fontSize: 15,
    color: '#555',
  },

});

export default UserData;