import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarItem = () => {
  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>September, 3</Text>
      <View style={styles.calendar}></View>
    </SafeAreaView>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    display: 'flex',
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
});
