import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import ImageHolder from './ImageHolder';


var {height, width} = Dimensions.get('window');

const renderImages = (dataSet)=>{
  return dataSet.map((item)=>{
      return (
        <ImageHolder
          author={item.author}
          url={`https://picsum.photos/200/300?image=${item.id}`}
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
