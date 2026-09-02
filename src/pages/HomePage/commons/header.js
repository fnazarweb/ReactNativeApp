import { StyleSheet, Text, View } from 'react-native';
import VidCalendar from './vidCalendar';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує </Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>

      <View tyle={styles.blockCalendar}>
        <Text style={styles.day}>1500 день війни</Text>
        <VidCalendar />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  header: {},
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: 'black',
  },
  titleBig: {
    fontSize: 24,
    fontWeight: 900,
    color: 'black',
  },
  blockCalendar: {
    display: 'flex',
  },
  day: {
    fontSize: 20,
    fontWeight: 600,
    color: '#ffd600',
  },
});

export default Header;
