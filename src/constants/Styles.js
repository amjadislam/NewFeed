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
  largeHeadingTextStyle: {
    fontSize: hp('3%'),
    fontWeight: '500',
    color: '#151515',
  },
  headingTextStyle: {
    fontSize: hp('2%'),
    fontWeight: '500',
    color: '#151515',
  },
  detailsTextStyle: {
    fontSize: hp('1.8%'),
    color: '#151515',
  },
});
