import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const ImageHolder = ({ author, id, imageWidth, margin, onPress })=>{
  return (
    <TouchableOpacity
      onPress={onPress}
     style={{ margin }}>
      <Image
        source={{ uri: `https://picsum.photos/200/300?image=${id}` }}
        style={{
          width: imageWidth,
          height: imageWidth,
          borderRadius: 15,
          shadowColor: 'black',
          shadowOffset: { width: 1, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 5,
        }}
      />
      <Text>
        {author}
      </Text>
    </TouchableOpacity>
  )
}

export default ImageHolder;
