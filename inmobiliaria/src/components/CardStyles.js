import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#E9FCEF',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
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
    marginLeft: 8,
  },
  icons: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  stars: {
    flexDirection: 'row',
    backgroundColor: '#FFF7B8',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    zIndex: 50,
    top: 55,
    left: 20,
    position: 'absolute',
  },
});

export default CardStyles;
