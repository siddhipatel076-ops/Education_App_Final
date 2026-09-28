import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import Checkbox from 'expo-checkbox';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from './components/Home';
import Course from './components/Course';
import CourseDetails from './components/CourseDetails';
import UserData from './components/UserData';
import About from './components/About';
import Contact from './components/Contact';

const Stack = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const loginUser = () => {

    if (username === '' || password === '') {

      Alert.alert(
        'Error',
        'Please enter username and password'
      );

      return;
    }

    navigation.navigate('Home', {
      username: username,
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Login Form
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <View style={styles.checkboxContainer}>

        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
        />

        <Text style={styles.checkboxText}>
          I agree to the terms and conditions
        </Text>

      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            opacity: isSelected ? 1 : 0.5,
          },
        ]}
        disabled={!isSelected}
        onPress={loginUser}
      >

        <Text style={styles.buttonText}>
          Login
        </Text>

      </TouchableOpacity>

    </View>
  );
};

const App = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Course"
          component={Course}
        />

        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
        />

        <Stack.Screen
          name="UserData"
          component={UserData}
        />

        <Stack.Screen
          name="About"
          component={About}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
  },

  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'black',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default App;