import React from 'react';
import {View, Text} from 'react-native';
import CardStyles from './CardStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = () => {
  return (
    <View style={CardStyles.card}>
      <Text style={CardStyles.title}>Lugar</Text>
      <View style={CardStyles.icons}>
        <IonIcon name="location-outline" size={20} />
        <Text>Ubicacion</Text>
      </View>
      <View style={CardStyles.details}>
        <View style={CardStyles.icons}>
          <IonIcon name="bed-outline" size={20} />
          <Text style={CardStyles.txtDetails}>Camas</Text>
        </View>
        <View style={CardStyles.icons}>
          <MaterialCommunityIcons name="bathtub-outline" size={20} />
          <Text style={CardStyles.txtDetails}>Baños</Text>
        </View>
        <View style={CardStyles.icons}>
          <IonIcon name="ios-scan" size={20} />
          <Text style={CardStyles.txtDetails}>Tamaño</Text>
        </View>
      </View>
      <Text style={CardStyles.title}>Precio</Text>
    </View>
  );
};

export default Card;
