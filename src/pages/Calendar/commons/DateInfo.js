import { StyleSheet, Text, View } from 'react-native';
import StatsItemDay from './statsItemDay';
import { useDispatch, useSelector } from 'react-redux';
import { getStatsByDate } from '../../../redux/stats/statsThunk';
import { useEffect } from 'react';

const DateInfo = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date?.date);
  const statsByDate = useSelector(state => state.stats?.statsByDate?.data);

  useEffect(() => {
    dispatch(getStatsByDate(date));
  }, [dispatch, date]);

  console.log('DATE: ', date);

  const terms = {
    message: 'The data were fetched successfully.',
    data: {
      personnel_units: {
        title: 'Personnel units',
        icon: 'https://russianwarship.rip/images/icons/icon-people.svg',
      },
      tanks: {
        title: 'Tanks',
        icon: 'https://russianwarship.rip/images/icons/icon-tank.svg',
      },
      armoured_fighting_vehicles: {
        title: 'Armoured fighting vehicles',
        icon: 'https://russianwarship.rip/images/icons/icon-bbm.svg',
      },
      artillery_systems: {
        title: 'Artillery systems',
        icon: 'https://russianwarship.rip/images/icons/icon-art.svg',
      },
      mlrs: {
        title: 'Multiple Launch Rocket System',
        icon: 'https://russianwarship.rip/images/icons/icon-rszv.svg',
      },
      aa_warfare_systems: {
        title: 'Anti-aircraft warfare systems',
        icon: 'https://russianwarship.rip/images/icons/icon-ppo.svg',
      },
      planes: {
        title: 'Planes',
        icon: 'https://russianwarship.rip/images/icons/icon-plane.svg',
      },
      helicopters: {
        title: 'Helicopters',
        icon: 'https://russianwarship.rip/images/icons/icon-helicopter.svg',
      },
      vehicles_fuel_tanks: {
        title: 'Vehicles and fuel tanks',
        icon: 'https://russianwarship.rip/images/icons/icon-auto.svg',
      },
      warships_cutters: {
        title: 'Warships and cutters',
        icon: 'https://russianwarship.rip/images/icons/icon-ship.svg',
      },
      cruise_missiles: {
        title: 'Cruise missiles',
        icon: 'https://russianwarship.rip/images/icons/icon-rocket.svg',
      },
      uav_systems: {
        title: 'Unmanned aerial vehicle systems',
        icon: 'https://russianwarship.rip/images/icons/icon-bpla.svg',
      },
      special_military_equip: {
        title: 'Special military equipment',
        icon: 'https://russianwarship.rip/images/icons/icon-special.svg',
      },
      atgm_srbm_systems: {
        title:
          'Anti-tank guided missile and short-range ballistic missile systems',
        icon: 'https://russianwarship.rip/images/icons/icon-trk.svg',
      },
      submarines: {
        title: 'Submarines',
        icon: 'https://russianwarship.rip/images/icons/icon-submarine.svg',
      },
    },
  };

  return (
    <View style={styles.dateInfoBlock}>
      <StatsItemDay
        statsAll={statsByDate.stats.personnel_units}
        statsDay={statsByDate.increase.personnel_units}
        terms={terms.data.personnel_units}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.tanks}
        statsDay={statsByDate.increase.tanks}
        terms={terms.data.tanks}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.armoured_fighting_vehicles}
        statsDay={statsByDate.increase.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.artillery_systems}
        statsDay={statsByDate.increase.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.mlrs}
        statsDay={statsByDate.increase.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.aa_warfare_systems}
        statsDay={statsByDate.increase.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.planes}
        statsDay={statsByDate.increase.planes}
        terms={terms.data.planes}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.helicopters}
        statsDay={statsByDate.increase.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.vehicles_fuel_tanks}
        statsDay={statsByDate.increase.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.warships_cutters}
        statsDay={statsByDate.increase.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.cruise_missiles}
        statsDay={statsByDate.increase.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.uav_systems}
        statsDay={statsByDate.increase.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.special_military_equip}
        statsDay={statsByDate.increase.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.atgm_srbm_systems}
        statsDay={statsByDate.increase.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      />
      <StatsItemDay
        statsAll={statsByDate.stats.submarines}
        statsDay={statsByDate.increase.submarines}
        terms={terms.data.submarines}
      />
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
