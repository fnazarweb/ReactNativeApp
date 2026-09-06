import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import { useDispatch } from 'react-redux';
import { getLatestStats } from '../../redux/stats/statsThunk';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestStats());
  }, [dispatch]);

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
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
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default HomePage;
