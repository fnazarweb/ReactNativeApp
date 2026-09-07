import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  const openRusoriz = () => {
    Linking.openURL('https://www.sternenkofund.org/fundraisings/rusoriz');
  };
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.footerText}>
          Дякуємо за використання нашого застосунку ❤️
        </Text>
        <View style={styles.bottomRow}>
          <Text style={styles.copyright}>© 2026 War Tracker</Text>
          <Pressable style={styles.rusoriz} onPress={openRusoriz}>
            <FontAwesomeIcon icon={faScissors} color="#ff4d4d" size={20} />
            <Text style={styles.rusorizText}>RUSORIZ</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
  },

  container: {
    alignItems: 'center',
    paddingVertical: 5,
  },

  footerText: {
    width: '100%',
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#a9a9ad',
    textAlign: 'center',
    marginBottom: 20,
  },

  bottomRow: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rusoriz: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#2c2c2e',
  },

  rusorizText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },

  copyright: {
    fontSize: 15,
    color: '#6e6e73',
  },
});
export default Footer;
