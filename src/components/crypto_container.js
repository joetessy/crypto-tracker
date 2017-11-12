import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import fetchCoinData from './../actions/fetch_coin_data';

class CryptoContainer extends Component {

  componentDidMount(){
    this.props.fetchCoinData();
  }
  render(){
    return (
      <View>
        <Text> Crypto Container </Text>
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
