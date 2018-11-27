import React from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import ImageHolder from './ImageHolder';


var {height, width} = Dimensions.get('window');

const renderImages = (dataSet)=>{
  return dataSet.map((item)=>{
      return (
        <ImageHolder
          author={item.author}
          url={`https://picsum.photos/200/300?image=${item.id}`}
          width={width/3}
        />
      )
  })

}

const renderHeader = ()=>{
  return (
    <View
      style={{
        width,
         height: 90, backgroundColor: 'tomato',
         justifyContent: 'center',
         alignItems: 'center',

        }}
    >
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 24
        }}
      >
        Gallery
      </Text>
    </View>
  )
}


const GalleryList = (props)=>{
  return (
    <View>
      {renderHeader()}
      <ScrollView
        style={{
          backgroundColor: 'white',
          width: width
          }}
      >

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
        {renderImages(props.dataSet)}
        </View>
        </ScrollView>
      </View>
  )
}

export default GalleryList;
