import React from 'react';
import {View, Text} from 'react-native';
import CardStyles from './CardStyles';

const Card = () => {
  return (
    <View style={CardStyles.card}>
      <Text style={CardStyles.title}>Lugar</Text>
      <Text>Ubicacion</Text>
      <View style={CardStyles.details}>
        <Text style={CardStyles.txtDetails}>Camas</Text>
        <Text style={CardStyles.txtDetails}>Baños</Text>
        <Text style={CardStyles.txtDetails}>Tamaño</Text>
      </View>
      <Text style={CardStyles.title}>Precio</Text>
    </View>
  );
};

export default Card;
