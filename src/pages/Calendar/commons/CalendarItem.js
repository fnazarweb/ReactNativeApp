import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../../../redux/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  const setDate = day => {
    setSelected(day.dateString);
    dispatch(changeData(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setDate(day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    display: 'flex',
    marginBottom: 50,
  },

  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
});
