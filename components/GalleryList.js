import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';


var {height, width} = Dimensions.get('window');

const renderImages = (dataSet)=>{
  return dataSet.map((item)=>{

      return (
        <ImageHolder

        />
      )
  })

}


const GalleryList = (props)=>{
  return (
    <ScrollView
      style={{
        backgroundColor: 'tomato',
        width: width
        }}
    >
      {renderImages(props.dataSet)}

      </ScrollView>
  )
}

export default GalleryList;
