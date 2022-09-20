import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
    paddingVertical: hp('1.5%'),
    marginHorizontal: wp('2.5'),
    alignItems: 'center',
  },
  mainContainerStyle: darkModeEnabled => {
    return {
      backgroundColor: darkModeEnabled ? Colors.BLACK.lightBlack : '#FFFFFF',
      flex: 1,
    };
  },
  menuItemTitleTextStyle: darkModeEnabled => {
    return {
      ...Styles.headingTextStyle,
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
  menuItemSubtitleTextStyle: darkModeEnabled => {
    return {
      ...Styles.detailsTextStyle,
      marginTop: hp('0.8%'),
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
  titleTextStyle: darkModeEnabled => {
    return {
      ...Styles.largeHeadingTextStyle,
      alignSelf: 'center',
      marginVertical: hp('2%'),
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
});
