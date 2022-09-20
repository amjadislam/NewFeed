import {StyleSheet} from 'react-native';
import Styles from '../../../constants/Styles';
import {Colors, hp, wp} from '../../../constants';

export default StyleSheet.create({
  flagImageStyle: {height: 50, width: 50, borderRadius: 90},
  titleTextStyle: darkModeEnabled => {
    return {
      ...Styles.largeHeadingTextStyle,
      alignSelf: 'center',
      marginVertical: hp('2%'),
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
  detailsTextStyle: darkModeEnabled => {
    return {
      ...Styles.detailsTextStyle,
      alignSelf: 'center',
      marginBottom: hp('2%'),
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
    };
  },
  languageTitleTextStyle: (darkModeEnabled, isSelected) => {
    return {
      ...Styles.detailsTextStyle,
      alignSelf: 'center',
      marginTop: hp('1%'),
      color: isSelected
        ? Colors.LIGHT_BLUE.default
        : darkModeEnabled
        ? Colors.WHITE.default
        : Colors.BLACK.default,
    };
  },
  modalContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    padding: 25,
    backgroundColor: Colors.BLACK.reallyTransBlack,
  },
  innerContainerStyle: darkModeEnabled => {
    return {
      ...Styles.shadowStyle,
      backgroundColor: darkModeEnabled
        ? Colors.BLACK.dialogBlack
        : Colors.WHITE.default,
      padding: 14,
      paddingBottom: 20,
      borderRadius: 15,
    };
  },
  languageContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
    marginHorizontal: wp('10%'),
  },
  languageItemStyle: {alignItems: 'center', justifyContent: 'center'},
});
