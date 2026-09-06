import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeData } from '../../../redux/date/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  const setDate = async day => {
    setSelected(day.dateString);
    dispatch(changeData(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Calendar
        style={styles.calendar}
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
    </SafeAreaView>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 10,
    display: 'flex',
    marginBottom: 10,
  },
  calendar: {
    backgroundColor: 'white',
  },
});
