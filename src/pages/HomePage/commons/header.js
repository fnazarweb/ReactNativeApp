import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
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
        <Text style={styles.day}>1500 день війни</Text>
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
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  day: {
    fontSize: 20,
    fontWeight: 600,
    color: '#ffd600',
  },
  data: { fontSize: 19, color: 'black' },
});

export default Header;
