import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  Ionicons,
} from '@expo/vector-icons';


const Course = () => {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');


  const courseData = [
    {
      id: '1',
      title: 'React Native',
      language: 'JavaScript',
      description: 'Build mobile apps using React Native.',
      icon: 'phone-portrait-outline',
      iconColor: '#2196F3',
      iconBackground: '#E3F2FD',
    },

    {
      id: '2',
      title: 'JavaScript',
      language: 'English',
      description: 'Learn JavaScript fundamentals and programming.',
      icon: 'logo-javascript',
      iconColor: '#F9A825',
      iconBackground: '#FFF8E1',
    },

    {
      id: '3',
      title: 'Python',
      language: 'English',
      description: 'Learn Python programming from basic to advanced.',
      icon: 'code-slash-outline',
      iconColor: '#2196F3',
      iconBackground: '#E0F7FA',
    },

    {
      id: '4',
      title: 'HTML & CSS',
      language: 'English',
      description: 'Create beautiful and responsive websites.',
      icon: 'globe-outline',
      iconColor: '#E91E63',
      iconBackground: '#FCE4EC',
    },

    {
      id: '5',
      title: 'Flutter',
      language: 'English',
      description: 'Build beautiful cross-platform mobile apps.',
      icon: 'phone-portrait-outline',
      iconColor: '#673AB7',
      iconBackground: '#EDE7F6',
    },

    {
      id: '6',
      title: 'Java',
      language: 'English',
      description: 'Learn Java programming and build applications.',
      icon: 'cafe-outline',
      iconColor: '#E65100',
      iconBackground: '#FFF3E0',
    },

    {
      id: '7',
      title: 'C Programming',
      language: 'English',
      description: 'Learn C programming and build strong logic.',
      icon: 'terminal-outline',
      iconColor: '#00838F',
      iconBackground: '#E0F7FA',
    },

    {
      id: '8',
      title: 'React JS',
      language: 'English',
      description: 'Build modern and dynamic web applications.',
      icon: 'logo-react',
      iconColor: '#2196F3',
      iconBackground: '#E3F2FD',
    },
  ];


  const filteredCourses = courseData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  const CourseCard = ({ item }) => {

    return (
      <View style={styles.courseCard}>

        {/* Course Icon */}

        <View
          style={[
            styles.courseIconContainer,
            {
              backgroundColor: item.iconBackground,
            },
          ]}
        >

          <Ionicons
            name={item.icon}
            size={55}
            color={item.iconColor}
          />

        </View>


        {/* Course Name */}

        <Text style={styles.courseTitle}>
          {item.title}
        </Text>


        {/* Language */}

        <View style={styles.languageContainer}>

          <Text style={styles.language}>
            {item.language}
          </Text>

        </View>


        {/* Description */}

        <Text
          style={styles.description}
          numberOfLines={2}
        >
          {item.description}
        </Text>


        {/* Button */}

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {

            navigation.navigate(
              'CourseDetails',
              {
                course: item,
              }
            );

          }}
        >

          <Text style={styles.buttonText}>
            Start Learning
          </Text>

          <Ionicons
            name="arrow-forward"
            size={18}
            color="#fff"
          />

        </TouchableOpacity>

      </View>
    );
  };


  return (
    <View style={styles.container}>


      {/* Hero Header */}

      <View style={styles.heroSection}>

        <View style={styles.heroContent}>

          <Text style={styles.heroTitle}>
            Explore Our Courses
          </Text>

          <Text style={styles.heroSubtitle}>
            Learn new skills, build your future
            {'\n'}
            with our easy and flexible courses.
          </Text>


          {/* Search */}

          <View style={styles.searchContainer}>

            <Ionicons
              name="search-outline"
              size={22}
              color="#6b7280"
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#777"
              value={search}
              onChangeText={setSearch}
            />

          </View>

        </View>


        {/* Education Icon */}

        <View style={styles.heroIcon}>

          <Ionicons
            name="school-outline"
            size={75}
            color="#fff"
          />

          <View style={styles.smallBookOne} />
          <View style={styles.smallBookTwo} />

        </View>

      </View>


      {/* Course List */}

      <FlatList
        data={filteredCourses}
        renderItem={({ item }) => (
          <CourseCard item={item} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={

          <View style={styles.emptyContainer}>

            <Ionicons
              name="search-outline"
              size={50}
              color="#aaa"
            />

            <Text style={styles.emptyText}>
              No courses found
            </Text>

          </View>

        }
      />

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },


  /* Hero */

  heroSection: {
    backgroundColor: '#2196F3',
    minHeight: 235,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  heroContent: {
    flex: 1,
    zIndex: 2,
  },

  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },

  heroSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#EAF4FF',
    marginBottom: 20,
  },


  /* Search */

  searchContainer: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    width: '100%',
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#222',
  },


  /* Hero Icon */

  heroIcon: {
    width: 115,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    opacity: 0.95,
  },

  smallBookOne: {
    position: 'absolute',
    width: 75,
    height: 10,
    backgroundColor: '#FFD54F',
    bottom: 38,
    borderRadius: 5,
  },

  smallBookTwo: {
    position: 'absolute',
    width: 85,
    height: 10,
    backgroundColor: '#FFFFFF',
    bottom: 25,
    borderRadius: 5,
  },


  /* Course List */

  list: {
    padding: 10,
    paddingBottom: 30,
  },

  row: {
    justifyContent: 'space-between',
  },


  /* Course Card */

  courseCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 10,
    marginBottom: 15,

    borderWidth: 1,
    borderColor: '#e6e6e6',

    elevation: 4,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.12,

    shadowRadius: 5,
  },


  /* Icon */

  courseIconContainer: {
    height: 105,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },


  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 7,
  },


  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F2FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 8,
  },

  language: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1976D2',
  },


  description: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#64748B',
    minHeight: 36,
    marginBottom: 12,
  },


  /* Button */

  button: {
    height: 43,
    backgroundColor: '#2196F3',
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },

  buttonText: {
    color: '#fff',
    fontSize: 12.5,
    fontWeight: 'bold',
  },


  /* Empty */

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },

  emptyText: {
    fontSize: 18,
    color: '#777',
    marginTop: 10,
  },

});

export default Course;