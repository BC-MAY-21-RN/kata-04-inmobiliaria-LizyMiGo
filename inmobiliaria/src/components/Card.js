import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CardStyles from './CardStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ImageCard from './ImageCard';
import DetailsCard from './DetailsCard';

const Card = ({id, img, title, location, beds, toilets, m, price, stars}) => {
  const [like, setLike] = useState(false);
  const onLikePress = () => setLike(!like);
  return (
    <View style={CardStyles.card}>
      <ImageCard stars={stars} img={img} />
      <View style={CardStyles.content}>
        <Text style={CardStyles.title}>{title}</Text>
        <View style={CardStyles.icons}>
          <IonIcon name="location-outline" size={20} />
          <Text>{location}</Text>
        </View>
        <DetailsCard beds={beds} toilets={toilets} m={m} />
        <View style={CardStyles.details}>
          <Text style={CardStyles.title}>{price}</Text>
          <IonIcon
            name="md-heart-circle"
            size={30}
            color={like ? 'gray' : 'green'}
            onPress={onLikePress}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
