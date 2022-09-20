import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../constants';
import Styles from '../../../constants/Styles';

export default StyleSheet.create({
  backButtonStyle: {
    backgroundColor: 'white',
    alignSelf: 'baseline',
    borderRadius: 90,
    position: 'absolute',
    height: hp('4%'),
    width: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1%'),
    marginStart: wp('2.5%'),
    ...Styles.shadowStyle,
  },
  backIconStyle: {paddingEnd: wp('0.4%')},
});
