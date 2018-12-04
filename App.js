/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import GalleryList from './components/GalleryList';
import dataSet from './imageData';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    const newDataSet = dataSet.map(item => {
        item.voteCount = 0;
        return item;
    })

    this.state = {
      dataSet: newDataSet,
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <GalleryList
          dataSet={this.state.dataSet}
          updateDateSet={(newDataSet)=>{
              this.setState({
                dataSet: newDataSet
              })
          }}
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
