import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItemDay = ({ statsAll, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        style={styles.statsImage}
        width={50}
        height={55}
        uri={terms.icon}
      />
      <View style={styles.statsInfo}>
        <Text style={styles.statsAll}>{statsAll}</Text>
        <Text style={styles.statsText} numberOfLines={2}>
          {terms.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    width: '29%',
    height: 125,
    marginHorizontal: '2%',
    marginBottom: '6%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statsInfo: {
    width: '100%',
  },

  statsAll: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
  },

  statsText: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 3,
  },
});

export default StatsItemDay;
