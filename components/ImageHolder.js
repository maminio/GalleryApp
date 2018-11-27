import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';



const ImageHolder = (props) => {
  return (
    <View>
      <Image
        source={{ uri: `` }}
        style={{
          width: 250,
          height: 250,
          borderRadius: 15,
          }}
      />
      <Text>

      </Text>
    </View>
  )
}

export default ImageHolder;
