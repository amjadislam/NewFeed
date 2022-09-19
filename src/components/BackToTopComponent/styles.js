import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: {
    backgroundColor: 'white',
    height: hp('5%'),
    width: hp('5%'),
    borderRadius: 90,
    position: 'absolute',
    bottom: hp('5%'),
    right: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    ...Styles.shadowStyle,
  },
});
