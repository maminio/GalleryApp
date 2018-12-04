import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, Linking } from 'react-native';
const { width, height } = Dimensions.get('window');

const renderImageDesc = (imageData)=>{
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Author
      </Text>
      <Text style={{ fontSize: 16 }}>
        {imageData.author}
      </Text>
    </View>
  )
}


const renderVotingButtons = () => {
  <View style={{ flexDirection: 'row', backgroundColor: 'yellow', flex: 1  }}>
  <TouchableOpacity
    style={{
      width: 25,
      height: 25,
      backgroundColor: '#88a95b',

    }}
    onPress={()=>{

    }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
      D
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      width: 25,
      height: 25,
      backgroundColor: '#88a95b',

    }}
    onPress={()=>{
    }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
      U
    </Text>
  </TouchableOpacity>
  </View>
}

const renderOpenOnWeb = (imageData)=>{
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: '#88a95b',
        borderRadius: 25,
        marginHorizontal: 50,
        marginTop: 50,
      }}
      onPress={()=>{
        Linking.canOpenURL(imageData.post_url).then((supported) => {
            if (!supported) {
                console.log('Can\'t handle url: ' + imageData.post_url);
            }else {
              return Linking.openURL(imageData.post_url);
            }})
        .catch(err => console.error('An error occurred', err));
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
        OPEN ON WEB
      </Text>
    </TouchableOpacity>
  )
}

const ExpandedImage = ({ imageData, onClose }) => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
    <TouchableOpacity
      style={{
        width: 40,
         height: 40,
         borderRadius: 20,
         backgroundColor: 'tomato',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'absolute',
         top: 20,
         right: 25,
        }}
      onPress={onClose}
    >
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
        X
      </Text>
    </TouchableOpacity>
    <Image
      source={{ uri: `https://picsum.photos/200/300?image=${imageData.id}` }}
      style={{
        height: height/2,
        margin: 24,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
    />
    {renderImageDesc(imageData)}
    {renderOpenOnWeb(imageData)}
    {renderVotingButtons()}
    </View>
  )
}


export default ExpandedImage;
