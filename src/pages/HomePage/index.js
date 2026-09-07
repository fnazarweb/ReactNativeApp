import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestStats } from '../../redux/stats/statsThunk';
import Loader from '../../commons/loader/modalLoader';

const HomePage = () => {
  const loading = useSelector(state => state.stats?.loadingLatest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestStats());
  }, [dispatch]);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <LinearGradient
        colors={['#4A90D9', '#ffffff', '#F6D96B']}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.7, y: 1 }}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}
      >
        <Header />
        <Stats />
        <Loader visible={loading} />
      </LinearGradient>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
  container: {
    backgroundColor: '#4A90D9',
  },
});

export default HomePage;
