import React from 'react';
import { Header } from './src/components';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header/>
        </View>
      </Provider>
    );
  }
}
