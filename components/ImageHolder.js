import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';



const ImageHolder = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.url }}
        style={{
          width: props.width,
          height: props.width,
          borderRadius: 15,
          margin: 12
          }}
      />
      <Text>
        {props.author}
      </Text>
    </View>
  )
}

export default ImageHolder;
