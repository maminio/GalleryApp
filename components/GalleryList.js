import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';


var {height, width} = Dimensions.get('window');

const renderImages = ()=>{
  return (

  )
}


const GalleryList = ()=>{
  return (
    <ScrollView
      style={{
        backgroundColor: 'tomato',
        width: width
        }}
    >
      {this.renderImages()}

      </ScrollView>
  )
}

export default GalleryList;
