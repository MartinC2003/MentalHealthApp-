import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const Home = ({ route }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to My App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>This is the homepage content.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
  },
});

export default Home;
