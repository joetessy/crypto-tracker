import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import fetchCoinData from './../actions/fetch_coin_data';
import CoinCard from './coin_card';

class CryptoContainer extends Component {

  componentDidMount(){
    this.props.fetchCoinData();
  }

  renderCoinCards(){
    const { crypto } = this.props;
    console.log(crypto);
    return crypto.data.map((coin, index) => {
      return <CoinCard
        key={index}
        coinName={coin.name}
        symbol={coin.symbol}
        priceUsd={coin.price_usd}
        percentChange24={coin.percent_change_24h}
        percentChange7d={coin.percent_change_7d}
      />;
    });
  }
  render(){
    const { crypto } = this.props;
    if (crypto.isFetching) {
      return (
        <View>
        <Text> Loading </Text>
        </View>
      );
    }
    return (
      <View>
        {this.renderCoinCards()}
      </View>
    );
  }
}

const mapStateToProps = ({crypto}) => {
  return ({
    crypto
  });
};

export default connect(mapStateToProps, {fetchCoinData})(CryptoContainer);
