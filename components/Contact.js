import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      message.trim() === ''
    ) {

      Alert.alert(
        'Missing Information',
        'Please fill all fields before submitting.'
      );

      return;
    }

    Alert.alert(
      'Message Sent',
      'Thank you! Your message has been submitted successfully.'
    );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}

      <View style={styles.header}>

        <View style={styles.headerIcon}>
          <Ionicons
            name="mail-open-outline"
            size={40}
            color="#2196F3"
          />
        </View>

        <Text style={styles.heading}>
          Contact Us
        </Text>

        <Text style={styles.headerText}>
          We would love to hear from you!
        </Text>

      </View>


      {/* Contact Information */}

      <View style={styles.infoCard}>

        <Text style={styles.sectionTitle}>
          Get In Touch
        </Text>

        <View style={styles.infoRow}>

          <View style={styles.iconBox}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View>
            <Text style={styles.infoLabel}>
              Email
            </Text>

            <Text style={styles.infoValue}>
              education@example.com
            </Text>
          </View>

        </View>


        <View style={styles.infoRow}>

          <View style={styles.iconBox}>
            <Ionicons
              name="call-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View>
            <Text style={styles.infoLabel}>
              Phone
            </Text>

            <Text style={styles.infoValue}>
              +91 98765 43210
            </Text>
          </View>

        </View>


        <View style={styles.infoRow}>

          <View style={styles.iconBox}>
            <Ionicons
              name="location-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View>
            <Text style={styles.infoLabel}>
              Address
            </Text>

            <Text style={styles.infoValue}>
              Gujarat, India
            </Text>
          </View>

        </View>

      </View>


      {/* Contact Form */}

      <View style={styles.formCard}>

        <Text style={styles.sectionTitle}>
          Send Us a Message
        </Text>

        {/* Name */}

        <Text style={styles.label}>
          Your Name
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="person-outline"
            size={22}
            color="#777"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

        </View>


        {/* Email */}

        <Text style={styles.label}>
          Email Address
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="mail-outline"
            size={22}
            color="#777"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

        </View>


        {/* Message */}

        <Text style={styles.label}>
          Message
        </Text>

        <View style={styles.messageContainer}>

          <Ionicons
            name="chatbubble-outline"
            size={22}
            color="#777"
          />

          <TextInput
            style={styles.messageInput}
            placeholder="Write your message..."
            value={message}
            onChangeText={setMessage}
            multiline={true}
            textAlignVertical="top"
          />

        </View>


        {/* Submit Button */}

        <TouchableOpacity
          style={styles.button}
          onPress={submitForm}
          activeOpacity={0.8}
        >

          <Ionicons
            name="send-outline"
            size={21}
            color="#fff"
          />

          <Text style={styles.buttonText}>
            Send Message
          </Text>

        </TouchableOpacity>

      </View>


      {/* Bottom Text */}

      <Text style={styles.bottomText}>
        We will get back to you as soon as possible.
      </Text>

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  header: {
    backgroundColor: '#2196F3',
    paddingTop: 30,
    paddingBottom: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerIcon: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },

  headerText: {
    fontSize: 15,
    color: '#eaf4ff',
    textAlign: 'center',
  },

  infoCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#eaf4ff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  infoLabel: {
    fontSize: 13,
    color: '#777',
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  formCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 7,
  },

  inputContainer: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fb',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 13,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#222',
  },

  messageContainer: {
    minHeight: 120,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f8f9fb',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 13,
    marginBottom: 20,
  },

  messageInput: {
    flex: 1,
    height: 95,
    fontSize: 15,
    marginLeft: 10,
    color: '#222',
  },

  button: {
    height: 55,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  bottomText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 30,
  },

});

export default Contact;