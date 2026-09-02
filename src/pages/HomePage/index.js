import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';

const HomePage = () => {
  return (
    <LinearGradient
      colors={['#0057b8', '#ffffff', '#ffd600']}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.7, y: 1 }}
      locations={[0, 0.45, 0.75]}
      style={styles.linearGradient}
    >
      <Header />
      <Stats />
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default HomePage;
