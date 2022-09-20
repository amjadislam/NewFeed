import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: darkModeEnabled => {
    return {
      position: 'absolute',
      top: Styles.listItemsOffset.height,
      zIndex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 90,
      alignItems: 'center',
      backgroundColor: darkModeEnabled ? Colors.WHITE.transWhite : Colors.WHITE.default,
      ...Styles.shadowStyle,
    };
  },
  searchIconContainerStyle: {paddingHorizontal: wp('3%')},
  searchFieldStyle: darkModeEnabled => {
    return {
      height: hp('5%'),
      width: '75%',
      marginEnd: wp('3%'),
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
  closeContainer: {
    width: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
