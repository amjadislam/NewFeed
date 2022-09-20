import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: darkModeEnabled => {
    return {
      backgroundColor: darkModeEnabled
        ? Colors.BLACK.lightBlack
        : Colors.WHITE.default,
      height: hp('5%'),
      width: hp('5%'),
      borderRadius: 90,
      position: 'absolute',
      bottom: hp('5%'),
      right: wp('10%'),
      alignItems: 'center',
      justifyContent: 'center',
      ...Styles.shadowStyle,
    };
  },
});
