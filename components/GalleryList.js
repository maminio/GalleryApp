import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, Fragment, Modal } from 'react-native';
import ImageHolder from './ImageHolder';
import ExpandedImage from './ExpandedImage';


const { width, height } = Dimensions.get('window');
const IMAGE_PADDING = 25;

export default class GalleryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      imageData: null,
      imageIndex: 0
    }
  }

  renderImages(){
    const imageWidth = ((width - IMAGE_PADDING * 2) - 16)/2;

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {this.props.dataSet.map((item,index)=>(
            <ImageHolder
              author={item.author}
              id={item.id}
              imageWidth={imageWidth}
              margin={16}
              onPress={()=>{
                this.setState({
                  imageData: item,
                  modalVisible: true,
                  imageIndex: index
                })
              }}
            />
          ))}
        </View>
    )
  }

  renderHeader(){
    return (
      <View style={{
         width,
         height: 80,
         backgroundColor: 'tomato',
         justifyContent: 'center',
         shadowColor: 'black',
         shadowOffset: { width: 1, height: 2 },
         shadowOpacity: 0.4,
         shadowRadius: 5,
        }} >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 24
          }}
        >
          Gallery
        </Text>
      </View>
    )
  }

  renderModal(){
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <ExpandedImage
          onClose={()=>{
            this.setState({
              imageData: null,
              modalVisible: false,
            })
          }}
          imageIndex={this.state.imageIndex}
          onUpVote={(index)=>{
            const data = this.props.dataSet;
            data[index].voteCount = this.props.dataSet[index].voteCount + 1
            this.props.updateDateSet(data);
          }}
          onDownVote={()=>{

          }}
          imageData={this.state.imageData}
        />
      </Modal>
    )
  }

  render(){
      return (
        <View style={{ flex: 1 }} >
          {this.renderHeader()}
          <ScrollView>
            {this.renderImages()}
          </ScrollView>
          {this.renderModal()}
        </View>
      )
  }
}
