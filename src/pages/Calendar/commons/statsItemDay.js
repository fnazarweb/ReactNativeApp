import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItemDay = ({ statsAll, statsDay, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        style={styles.statsImage}
        width={50}
        height={55}
        uri={terms.icon}
      />
      <View style={styles.statsInfo}>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>(+{statsDay})</Text>
        </View>

        <Text style={styles.statsText} numberOfLines={2}>
          {terms.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    width: '28%',
    height: 120,
    marginHorizontal: '2%',
    marginTop: '2%',
    marginBottom: '4%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statsInfo: {
    width: '100%',
  },

  statsNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statsAll: {
    fontSize: 15,
    color: 'black',
    fontWeight: '900',
  },

  statsDay: {
    fontSize: 13,
    marginLeft: 5,
    fontWeight: '500',
  },

  statsText: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 3,
  },
});

export default StatsItemDay;
