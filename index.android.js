/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';


 var config = {
    apiKey: "AIzaSyCorneWeCFPNefq2VC0hEgbq93TqRW78y0",
    authDomain: "touristguideapp-afb10.firebaseapp.com",
    databaseURL: "https://touristguideapp-afb10.firebaseio.com",
    projectId: "touristguideapp-afb10",
    storageBucket: "touristguideapp-afb10.appspot.com",
    messagingSenderId: "35283184773"
  };
  firebase.initializeApp(config);
export default class TouristGuide extends Component {
  render() {
    return (
      <Provider store={store}>

        <App />

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TouristGuide', () => TouristGuide);
