import React from 'react';
import {View, FlatList} from 'react-native';
import Card from './Card';
const List = props => {
  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        renderItem={({item}) => <Card {...item} />}
      />
    </View>
  );
};

export default List;
