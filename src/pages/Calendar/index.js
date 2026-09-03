import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './CalendarItem';

const Calendar = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <LinearGradient
        colors={['#0057b8', '#ffffff', '#ffd600']}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.7, y: 1 }}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}
      >
        <CalendarItem />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});
