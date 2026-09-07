import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItem = ({ statsAll, statsDay, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        style={styles.statsImage}
        width={100}
        height={50}
        uri={terms.icon}
      />
      <View style={styles.statsContent}>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>(+{statsDay})</Text>
        </View>

        <Text style={styles.statsText}>{terms.title}</Text>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  statsBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },

  statsImage: {
    marginRight: 30,
    marginLeft: 10,
    flexShrink: 0,
  },

  statsContent: {
    flex: 1,
    minWidth: 0,
    flexShrink: 1,
  },

  statsNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  statsAll: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },

  statsDay: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: '500',
  },

  statsText: {
    fontSize: 18,
    flexShrink: 1,
  },
});

export default StatsItem;
