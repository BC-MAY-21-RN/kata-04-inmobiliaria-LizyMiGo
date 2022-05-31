import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#E9FCEF',
    padding: 15,
    margin: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  details: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtDetails: {
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginRight: 15,
  },
});

export default CardStyles;
