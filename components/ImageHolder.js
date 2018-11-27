import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';



const ImageHolder = (props) => {
  console.log('IMAGE HOLDER PROPS ==> ',{props});
  return (
    <View>
      <Image
        source={{ uri: props.url }}
        style={{
          width: 250,
          height: 250,
          borderRadius: 15,
          }}
      />
      <Text>
        props.author
      </Text>
    </View>
  )
}

export default ImageHolder;
