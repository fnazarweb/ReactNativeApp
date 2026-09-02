import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
const VidCalendar = () => {
  return (
    <View style={styles.block}>
      <Pressable>
        <Image
          source={require('../../../icon/arrow-left.png')}
          style={styles.btn}
        />
      </Pressable>
      <Text style={styles.data}>Станом на: </Text>
      <Text style={styles.data}>7 червня</Text>
      <Pressable style={styles.btn}>
        <Image
          source={require('../../../icon/arrow-right.png')}
          style={styles.btn}
        />
      </Pressable>
    </View>
  );
};

var styles = StyleSheet.create({
  block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    paddingLeft: 15,
    margin: 10,
  },
  data: { fontSize: 19, fontWeight: 600, color: 'black' },
  btn: { width: 25, height: 25 },
});

export default VidCalendar;
