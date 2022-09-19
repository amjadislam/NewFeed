import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../constants';

export default StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('3%'),
    marginTop: hp('1%'),
  },
  newsContainerStyle: {
    width: '100%',
    height: hp('24%'),
    borderRadius: 4,
    overflow: 'hidden',
  },
  coverImageStyle: {height: '100%', width: '100%'},
  headingContainerStyle: {
    width: '100%',
    paddingHorizontal: wp('1%'),
    alignSelf: 'flex-start',
    marginTop: hp('0.5%'),
  },
  headingTextStyle: {fontSize: hp('2%'), fontWeight: '500', color: '#151515'},
});
