import React, { Fragment } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const ImageHolder = ({ author, id, imageWidth, margin, onPress })=>{
  return (
    <View>
    <TouchableOpacity
      onPress={onPress}
     style={{ margin,
          shadowColor: 'black',
          shadowOffset: { width: 1, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
         }}
    >
      <Image
        source={{ uri: `https://picsum.photos/200/300?image=${id}` }}
        style={{
          width: imageWidth,
          height: imageWidth,
          borderRadius: 15,
        }}
      />

    </TouchableOpacity>
    <Text
      style={{
        fontWeight: 'bold',
        marginTop: 0,
        color: '#606663',
        textAlign: 'center'
       }}
    >
      {author}
    </Text>
    </View>
  )
}

export default ImageHolder;
