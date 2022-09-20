import {Platform, StyleSheet} from 'react-native';
import {hp} from './Dimensions';
import {Colors} from './index';

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
    color: Colors.BLACK.textColor,
  },
  headingTextStyle: {
    fontSize: hp('2%'),
    fontWeight: '500',
    color: Colors.BLACK.textColor,
  },
  detailsTextStyle: {
    fontSize: hp('1.8%'),
    color: Colors.BLACK.textColor,
  },
});
