import {Platform, StyleSheet} from 'react-native';
import {hp} from './Dimensions';

export default StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItemsOffset: {
    ...Platform.select({
      android: {
        height: hp('2%'),
      },
      ios: {
        height: hp('7.5%'),
      },
    }),
  },
});
