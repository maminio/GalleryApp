/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import GalleryList from './components/GalleryList';
import dataSet from './imageData';


type Props = {};
export default class App extends Component<Props> {
  // ----> Comments here

  render() {
    return (
      <View style={styles.container}>
        <GalleryList
          dataSet={dataSet}
        />
      </View>
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
