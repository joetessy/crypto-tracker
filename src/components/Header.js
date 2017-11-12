import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Crypto Tracker</Text>
      <Text style={nameLink} onPress={() => Linking.openURL('https://joetessy.life')}>
        by Joe Tessy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'white',
  },
  nameLink: {
    fontFamily: 'Arial',
    marginTop: 20,
    color: 'white'
  },
});

const { headerContainer, header, nameLink } = styles;

export default Header;
