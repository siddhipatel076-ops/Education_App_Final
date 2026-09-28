import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const About = () => {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Hero Section */}

      <View style={styles.heroSection}>

        <View style={styles.logoContainer}>
          <Ionicons
            name="school-outline"
            size={55}
            color="#2196F3"
          />
        </View>

        <Text style={styles.heading}>
          About Us
        </Text>

        <Text style={styles.heroText}>
          Empowering Learning Through Technology
        </Text>

      </View>


      {/* About Card */}

      <View style={styles.card}>

        <View style={styles.titleRow}>

          <View style={styles.titleIcon}>
            <Ionicons
              name="book-outline"
              size={25}
              color="#2196F3"
            />
          </View>

          <Text style={styles.sectionTitle}>
            Online Education
          </Text>

        </View>

        <Text style={styles.description}>
          Welcome to our Online Education App, a simple and
          modern platform designed to make learning easier
          and more accessible.
        </Text>

        <Text style={styles.description}>
          Our goal is to provide students with useful courses,
          learning resources and a comfortable environment
          where they can improve their skills anytime and
          anywhere.
        </Text>

      </View>


      {/* Mission */}

      <View style={styles.card}>

        <View style={styles.titleRow}>

          <View style={styles.titleIcon}>
            <Ionicons
              name="rocket-outline"
              size={25}
              color="#2196F3"
            />
          </View>

          <Text style={styles.sectionTitle}>
            Our Mission
          </Text>

        </View>

        <Text style={styles.description}>
          Our mission is to make quality learning simple,
          accessible and engaging for everyone. We believe
          technology can make education more flexible and
          enjoyable.
        </Text>

      </View>


      {/* Features */}

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Why Choose Us?
        </Text>

        <View style={styles.featureRow}>

          <View style={styles.featureIcon}>
            <Ionicons
              name="school-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Easy Learning
            </Text>

            <Text style={styles.featureText}>
              Simple and easy-to-understand learning content.
            </Text>
          </View>

        </View>


        <View style={styles.featureRow}>

          <View style={styles.featureIcon}>
            <Ionicons
              name="phone-portrait-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Learn Anywhere
            </Text>

            <Text style={styles.featureText}>
              Access your learning resources from anywhere.
            </Text>
          </View>

        </View>


        <View style={styles.featureRow}>

          <View style={styles.featureIcon}>
            <Ionicons
              name="time-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Learn Anytime
            </Text>

            <Text style={styles.featureText}>
              Learn at your own time and at your own pace.
            </Text>
          </View>

        </View>


        <View style={styles.featureRow}>

          <View style={styles.featureIcon}>
            <Ionicons
              name="trending-up-outline"
              size={24}
              color="#2196F3"
            />
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>
              Improve Your Skills
            </Text>

            <Text style={styles.featureText}>
              Develop useful skills through practical learning.
            </Text>
          </View>

        </View>

      </View>


      {/* Social Media */}

      <View style={styles.socialCard}>

        <Text style={styles.sectionTitle}>
          Connect With Us
        </Text>

        <Text style={styles.socialText}>
          Follow us on social media for updates and
          educational content.
        </Text>

        <View style={styles.socialContainer}>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openLink('https://www.facebook.com/')
            }
          >
            <Ionicons
              name="logo-facebook"
              size={28}
              color="#1877F2"
            />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openLink('https://www.instagram.com/')
            }
          >
            <Ionicons
              name="logo-instagram"
              size={28}
              color="#E4405F"
            />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openLink('https://www.youtube.com/')
            }
          >
            <Ionicons
              name="logo-youtube"
              size={28}
              color="#FF0000"
            />
          </TouchableOpacity>

        </View>

      </View>


      {/* Footer */}

      <Text style={styles.footer}>
        Learn • Grow • Succeed
      </Text>

      <Text style={styles.copyright}>
        © 2026 Online Education App
      </Text>

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  heroSection: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  logoContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },

  heroText: {
    fontSize: 15,
    color: '#eaf4ff',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    elevation: 4,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  titleIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#eaf4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
    marginBottom: 10,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#eaf4ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },

  featureText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#666',
  },

  socialCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    elevation: 4,
    alignItems: 'center',
  },

  socialText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  socialContainer: {
    flexDirection: 'row',
    gap: 18,
  },

  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  footer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 25,
  },

  copyright: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: 8,
    marginBottom: 30,
  },

});

export default About;