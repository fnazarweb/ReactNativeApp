import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DateInfo from './commons/DateInfo';
import Loader from '../../commons/loader/modalLoader';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calendar = () => {
  const loading = useSelector(state => state.stats?.loadingByDate);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={['#4A90D9', '#ffffff', '#F6D96B']}
          start={{ x: 0.0, y: 0.3 }}
          end={{ x: 0.7, y: 1 }}
          locations={[0, 0.45, 0.75]}
          style={styles.linearGradient}
        >
          <CalendarItem />
          <DateInfo />
        </LinearGradient>
      </ScrollView>
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  container: {
    backgroundColor: '#4A90D9',
  },
});
