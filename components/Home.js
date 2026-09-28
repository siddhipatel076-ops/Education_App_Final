import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Menu from './Menu';


const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Top Header */}

        <View style={styles.topHeader}>

          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => {
              // Menu area is handled below
            }}
          >
            <Ionicons
              name="menu-outline"
              size={34}
              color="#102A56"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Home
          </Text>

          <View style={styles.profileCircle}>

            <Ionicons
              name="person"
              size={25}
              color="#1976D2"
            />

          </View>

        </View>


        {/* Hero Section */}

        <View style={styles.heroSection}>

          <View style={styles.heroTextContainer}>

            <Text style={styles.welcomeText}>
              WELCOME TO
            </Text>

            <Text style={styles.heroTitle}>
              Online Education
            </Text>

            <Text style={styles.heroSubtitle}>
              Learn Anytime, Anywhere
            </Text>

            <Text style={styles.heroSubtitle}>
              and Build a Better Future
            </Text>

            <TouchableOpacity
              style={styles.exploreButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('Course')
              }
            >

              <Text style={styles.exploreText}>
                Explore Courses
              </Text>

              <Ionicons
                name="arrow-forward"
                size={22}
                color="#fff"
              />

            </TouchableOpacity>

          </View>


          <Image
            source={require('../assets/images/education_home.png')}
            style={styles.heroImage}
          />

        </View>


        {/* Menu */}

        <View style={styles.menuWrapper}>
          <Menu />
        </View>


        {/* Education Section */}

        <View style={styles.educationCard}>

          <View style={styles.educationContent}>

            <Text style={styles.smallHeading}>
              LEARN  •  GROW  •  SUCCEED
            </Text>

            <Text style={styles.educationTitle}>
              Your Education
            </Text>

            <Text style={styles.educationTitleBlue}>
              Our Priority
            </Text>

            <Text style={styles.educationDescription}>
              Access quality courses, learn new skills
              and achieve your goals with our
              easy-to-use online education app.
            </Text>

            <TouchableOpacity
              style={styles.startButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('Course')
              }
            >

              <Text style={styles.startButtonText}>
                Start Learning
              </Text>

              <Ionicons
                name="arrow-forward"
                size={21}
                color="#fff"
              />

            </TouchableOpacity>

          </View>


          <View style={styles.educationIllustration}>

            <Ionicons
              name="school"
              size={100}
              color="#1565C0"
            />

            <View style={styles.bookOne} />
            <View style={styles.bookTwo} />
            <View style={styles.bookThree} />

          </View>

        </View>


        {/* Explore Courses Card */}

        <TouchableOpacity
          style={styles.courseBanner}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('Course')
          }
        >

          <View style={styles.targetCircle}>

            <Ionicons
              name="locate-outline"
              size={40}
              color="#1976D2"
            />

          </View>

          <View style={styles.bannerText}>

            <Text style={styles.bannerSmallText}>
              START LEARNING TODAY
            </Text>

            <Text style={styles.bannerTitle}>
              Explore Our Courses
            </Text>

            <Text style={styles.bannerDescription}>
              Learn new skills with simple and easy lessons.
            </Text>

          </View>

          <View style={styles.arrowCircle}>

            <Ionicons
              name="arrow-forward"
              size={25}
              color="#1976D2"
            />

          </View>

        </TouchableOpacity>


        {/* Footer */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Better Skills  →  Brighter Future
          </Text>

        </View>

      </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7faff',
  },


  /* Header */

  topHeader: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerIcon: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#102A56',
    marginLeft: 15,
  },

  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* Hero */

  heroSection: {
    marginHorizontal: 15,
    marginTop: 5,
    minHeight: 315,
    backgroundColor: '#1976F3',
    borderRadius: 25,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingLeft: 20,
  },

  heroTextContainer: {
    flex: 1,
    paddingTop: 30,
    zIndex: 2,
  },

  welcomeText: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#EAF4FF',
    marginBottom: 10,
  },

  heroTitle: {
    fontSize: 31,
    lineHeight: 37,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },

  heroSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#EAF4FF',
  },

  exploreButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    height: 48,
    paddingHorizontal: 17,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
  },

  exploreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
  },

  heroImage: {
    width: '52%',
    height: 315,
    resizeMode: 'cover',
  },


  /* Menu */

  menuWrapper: {
    marginTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
  },


  /* Education */

  educationCard: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: '#EEF5FF',
    borderRadius: 25,
    padding: 22,
    flexDirection: 'row',
    overflow: 'hidden',
    minHeight: 330,
  },

  educationContent: {
    flex: 1,
    zIndex: 2,
  },

  smallHeading: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#2864E8',
    marginBottom: 12,
  },

  educationTitle: {
    fontSize: 27,
    lineHeight: 33,
    fontWeight: 'bold',
    color: '#102A56',
  },

  educationTitleBlue: {
    fontSize: 27,
    lineHeight: 33,
    fontWeight: 'bold',
    color: '#2864E8',
    marginBottom: 15,
  },

  educationDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#536987',
  },

  startButton: {
    marginTop: 20,
    backgroundColor: '#5D3DF5',
    paddingHorizontal: 18,
    height: 48,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
  },

  startButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },


  /* Education Illustration */

  educationIllustration: {
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },

  bookOne: {
    width: 100,
    height: 13,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginTop: -15,
  },

  bookTwo: {
    width: 110,
    height: 13,
    backgroundColor: '#FFB300',
    borderRadius: 5,
    marginTop: 5,
  },

  bookThree: {
    width: 105,
    height: 13,
    backgroundColor: '#7C4DFF',
    borderRadius: 5,
    marginTop: 5,
  },


  /* Course Banner */

  courseBanner: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    backgroundColor: '#EAF8FC',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  targetCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#DCEEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerText: {
    flex: 1,
    marginLeft: 15,
  },

  bannerSmallText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#1976D2',
    marginBottom: 5,
  },

  bannerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#102A56',
    marginBottom: 4,
  },

  bannerDescription: {
    fontSize: 12,
    color: '#60758F',
  },

  arrowCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },


  /* Footer */

  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2864E8',
  },

});

export default Home;