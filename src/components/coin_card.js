import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from './../utils/constants';

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: 'bold'
  }
});

const CoinCard = ({
  symbol, coinName, priceUsd, percentChange24h, percentChange7d}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: images[symbol]}}
      />
      <Text>{symbol}</Text>
      <Text>{coinName}</Text>
      <Text>{priceUsd}</Text>
      <Text>Change past 24 hours: {percentChange24h}</Text>
      <Text>Change past 7 days: {percentChange7d}</Text>
    </View>
  );
};

export default CoinCard;
