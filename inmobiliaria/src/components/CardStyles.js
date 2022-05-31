import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#E9FCEF',
    padding: 25,
    margin: 20,
    borderRadius: 15,
  },
  details: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtDetails: {
    fontWeight: 'bold',
  },
});

export default CardStyles;
