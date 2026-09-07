import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeData } from '../../../redux/date/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  const setDate = day => {
    setSelected(day.dateString);
    dispatch(changeData(day.dateString));
  };

  return (
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
  );
};

export default CalendarItem;

const styles = StyleSheet.create({
  calendar: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'white',
  },
});
