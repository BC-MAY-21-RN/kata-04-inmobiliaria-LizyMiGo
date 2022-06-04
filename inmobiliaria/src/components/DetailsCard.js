import React from 'react';
import {View, Text, Image} from 'react-native';
import CardStyles from './CardStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsCard = ({beds, toilets, m}) => {
  return (
    <View style={CardStyles.details}>
      <View style={CardStyles.icons}>
        <IonIcon name="bed-outline" size={20} />
        <Text style={CardStyles.txtDetails}>{beds}</Text>
      </View>
      <View style={CardStyles.icons}>
        <MaterialCommunityIcons name="bathtub-outline" size={20} />
        <Text style={CardStyles.txtDetails}>{toilets}</Text>
      </View>
      <View style={CardStyles.icons}>
        <IonIcon name="ios-scan" size={20} />
        <Text style={CardStyles.txtDetails}>{m}</Text>
      </View>
    </View>
  );
};

export default DetailsCard;
