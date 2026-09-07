import React from 'react';
import { ScrollView } from 'react-native';
import StatsItem from './statsItem';
import { useSelector } from 'react-redux';
import Footer from '../../../commons/footer/footer';
import { termsUA } from '../../../data/terms';
import { termsKeys } from '../../../data/termsKeys';

const Stats = () => {
  const latestStats = useSelector(state => state.stats?.latestData);

  if (!latestStats) return null;
  return (
    <ScrollView>
      {termsKeys.map(key => (
        <StatsItem
          key={key}
          statsAll={latestStats.data.stats[key]}
          statsDay={latestStats.data.increase[key]}
          terms={termsUA.data[key]}
        />
      ))}

      <Footer />
    </ScrollView>
  );
};

export default Stats;
