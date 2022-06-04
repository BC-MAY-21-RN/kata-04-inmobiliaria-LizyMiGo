import React from 'react';
import {View, Text, Image} from 'react-native';
import CardStyles from './CardStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Img from './cover.jpg';

const Card = ({id, title, location, beds, toilets, m, price, stars}) => {
  return (
    <View style={CardStyles.card}>
      <View>
        <Image style={CardStyles.image} source={Img} />
        <View style={CardStyles.stars}>
          <FontAwesome name="star" size={15} color="#F5CC49" />
          <Text style={CardStyles.txtDetails}>4.7</Text>
        </View>
      </View>
      <View>
        <Text style={CardStyles.title}>{title}</Text>
        <View style={CardStyles.icons}>
          <IonIcon name="location-outline" size={20} />
          <Text>Direccion</Text>
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
        <View style={CardStyles.details}>
          <Text style={CardStyles.title}>Precio</Text>
          <IonIcon name="md-heart-circle" size={30} color="#52BB74" />
        </View>
      </View>
    </View>
  );
};

export default Card;
