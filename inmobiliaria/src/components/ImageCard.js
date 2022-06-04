import React from 'react';
import {View, Text, Image} from 'react-native';
import CardStyles from './CardStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ImageCard = ({stars, img}) => {
  return (
    <View>
      <Image style={CardStyles.image} source={{uri: img}} />
      <View style={CardStyles.stars}>
        <FontAwesome name="star" size={15} color="#F5CC49" />
        <Text style={CardStyles.txtDetails}>{stars}</Text>
      </View>
    </View>
  );
};

export default ImageCard;
