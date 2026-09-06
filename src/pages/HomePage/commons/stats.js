import React from 'react';
import { ScrollView } from 'react-native';
import StatsItem from './statsItem';
import { useSelector } from 'react-redux';
import Footer from '../../../commons/footer/footer';

const Stats = () => {
  const latestStats = useSelector(state => state.stats?.latestData);

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

  if (!latestStats) return null;
  return (
    <ScrollView>
      <StatsItem
        statsAll={latestStats.data.stats.personnel_units}
        statsDay={latestStats.data.increase.personnel_units}
        terms={terms.data.personnel_units}
      />
      <StatsItem
        statsAll={latestStats.data.stats.tanks}
        statsDay={latestStats.data.increase.tanks}
        terms={terms.data.tanks}
      />
      <StatsItem
        statsAll={latestStats.data.stats.armoured_fighting_vehicles}
        statsDay={latestStats.data.increase.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={latestStats.data.stats.artillery_systems}
        statsDay={latestStats.data.increase.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItem
        statsAll={latestStats.data.stats.mlrs}
        statsDay={latestStats.data.increase.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItem
        statsAll={latestStats.data.stats.aa_warfare_systems}
        statsDay={latestStats.data.increase.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItem
        statsAll={latestStats.data.stats.planes}
        statsDay={latestStats.data.increase.planes}
        terms={terms.data.planes}
      />
      <StatsItem
        statsAll={latestStats.data.stats.helicopters}
        statsDay={latestStats.data.increase.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItem
        statsAll={latestStats.data.stats.vehicles_fuel_tanks}
        statsDay={latestStats.data.increase.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={latestStats.data.stats.warships_cutters}
        statsDay={latestStats.data.increase.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItem
        statsAll={latestStats.data.stats.cruise_missiles}
        statsDay={latestStats.data.increase.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItem
        statsAll={latestStats.data.stats.uav_systems}
        statsDay={latestStats.data.increase.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItem
        statsAll={latestStats.data.stats.special_military_equip}
        statsDay={latestStats.data.increase.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItem
        statsAll={latestStats.data.stats.atgm_srbm_systems}
        statsDay={latestStats.data.increase.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      />
      <StatsItem
        statsAll={latestStats.data.stats.submarines}
        statsDay={latestStats.data.increase.submarines}
        terms={terms.data.submarines}
      />
      <Footer />
    </ScrollView>
  );
};

export default Stats;
