import React from 'react';
import { Header, CryptoContainer } from './src/components';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{backgroundColor: '#410105'}}>
          <Header/>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
