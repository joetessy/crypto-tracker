import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import fetchCoinData from './../actions/fetch_coin_data';
import CoinCard from './coin_card';
import Spinner from 'react-native-loading-spinner-overlay';

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
        percentChange24h={coin.percent_change_24h}
        percentChange7d={coin.percent_change_7d}
      />;
    });
  }
  render(){
    const { crypto } = this.props;
    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
};

const mapStateToProps = ({crypto}) => {
  return ({
    crypto
  });
};

export default connect(mapStateToProps, {fetchCoinData})(CryptoContainer);
