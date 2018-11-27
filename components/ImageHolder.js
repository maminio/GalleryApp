import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';



const ImageHolder = (props) => {
  return (
    <View>
      <Image
        source={{ uri: `https://picsum.photos/200/300?image=${dataSet[i].id}` }}
        style={{
          width: 250,
          height: 250,
          borderRadius: 15,
          }}
      />
      <Text>
        {dataSet[i].author}
      </Text>
    </View>
  )
}
