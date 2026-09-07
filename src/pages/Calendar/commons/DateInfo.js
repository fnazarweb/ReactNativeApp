import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStatsByDate } from '../../../redux/stats/statsThunk';
import { useEffect } from 'react';
import StatsItemDay from './statsItemDay';
import { termsUA } from '../../../data/terms';
import { termsKeys } from '../../../data/termsKeys';

const DateInfo = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date?.date);
  const statsByDate = useSelector(state => state.stats?.statsByDate?.data);

  useEffect(() => {
    dispatch(getStatsByDate(date));
  }, [dispatch, date]);

  if (!statsByDate) return null;
  return (
    <View style={styles.dateInfoBlock}>
      {termsKeys.map(key => (
        <StatsItemDay
          key={key}
          statsAll={statsByDate.stats[key]}
          statsDay={statsByDate.increase[key]}
          terms={termsUA.data[key]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dateInfoBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default DateInfo;
