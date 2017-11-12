import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from './../utils/constants';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    // borderBottomColor: '#e5e5e5',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  coinSymbol: {
    color: 'white',
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  coin_name: {
    color: 'white',
    marginLeft: 5,
    marginRight: 20
  },
  separator: {
    color: 'white',
  },
  coinPrice: {
    marginRight: 10,
    color: 'white',
    fontWeight: "bold"
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    color: 'white',
    fontWeight: 'bold'
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});

const {
  container, image, moneySymbol, upperRow, coinSymbol, coin_name, coinPrice,
  statisticsContainer, separator, percentChangePlus, percentChangeMinus
} = styles;

const CoinCard = ({
  symbol, coinName, priceUsd, percentChange24h, percentChange7d}) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image
          style={styles.image}
          source={{uri: images[symbol]}}
        />
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={coin_name}>{coinName}</Text>
        <Text style={moneySymbol}>$</Text>
        <Text style={coinPrice}>{priceUsd}</Text>
      </View>
      <View style={statisticsContainer}>

          <Text style={{color: 'white'}}>24h:
               <Text style={percentChange24h < 0 ? percentChangeMinus : percentChangePlus }> {percentChange24h} % </Text>
          </Text>
          <Text  style={{color: 'white'}}>7d:
              <Text style={percentChange7d < 0 ? percentChangeMinus : percentChangePlus }> {percentChange7d} % </Text>
          </Text>
      </View>
    </View>
  );
};

export default CoinCard;
