import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
  const daysNumberOfWar = useSelector(
    state => state.stats.latestData?.data.day,
  );
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const months = [
    '',
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  if (!daysNumberOfWar) return null;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує </Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>

      <View style={styles.blockData}>
        <Text style={styles.data}>
          {day} {months[month]}
        </Text>
        <Text style={styles.day}>{daysNumberOfWar} день війни</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 16,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 7,
  },

  titleBig: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '900',
    color: '#111827',
  },

  blockData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  data: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
  },

  day: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0057b8',
  },
});
export default Header;
