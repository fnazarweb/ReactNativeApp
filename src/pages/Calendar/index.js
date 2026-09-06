import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DateInfo from './commons/DateInfo';

const Calendar = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#0057b8', '#ffffff', '#ffd600']}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.7, y: 1 }}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}
      >
        <CalendarItem />
        <DateInfo />
      </LinearGradient>
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});
