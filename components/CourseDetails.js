import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const CourseDetails = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.courseIconContainer,
          {
            backgroundColor:
              course.iconBackground || '#E3F2FD',
          },
        ]}
      >
        <Ionicons
          name={course.icon || 'book-outline'}
          size={100}
          color={course.iconColor || '#2196F3'}
        />
      </View>

      <Text style={styles.title}>
        {course.title}
      </Text>

      <View style={styles.languageContainer}>
        <Text style={styles.language}>
          Language: {course.language}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        About This Course
      </Text>

      <Text style={styles.description}>
        {course.description}
      </Text>

      <Text style={styles.sectionTitle}>
        What You Will Learn
      </Text>

      <View style={styles.learningRow}>
        <Ionicons
          name="checkmark-circle"
          size={22}
          color="#2196F3"
        />
        <Text style={styles.learningText}>
          Basic concepts and fundamentals
        </Text>
      </View>

      <View style={styles.learningRow}>
        <Ionicons
          name="checkmark-circle"
          size={22}
          color="#2196F3"
        />
        <Text style={styles.learningText}>
          Practical programming skills
        </Text>
      </View>

      <View style={styles.learningRow}>
        <Ionicons
          name="checkmark-circle"
          size={22}
          color="#2196F3"
        />
        <Text style={styles.learningText}>
          Build real-world projects
        </Text>
      </View>

      <View style={styles.learningRow}>
        <Ionicons
          name="checkmark-circle"
          size={22}
          color="#2196F3"
        />
        <Text style={styles.learningText}>
          Improve your development skills
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        activeOpacity={0.8}
        onPress={() => {
          console.log(
            'Starting Course:',
            course.title
          );
        }}
      >
        <Text style={styles.buttonText}>
          Start Course
        </Text>

        <Ionicons
          name="arrow-forward"
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
  },

  courseIconContainer: {
    height: 230,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },

  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f1ff',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 25,
  },

  language: {
    color: '#1976D2',
    fontSize: 14,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555',
    marginBottom: 25,
  },

  learningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  learningText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
    flex: 1,
  },

  startButton: {
    backgroundColor: '#2196F3',
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetails;