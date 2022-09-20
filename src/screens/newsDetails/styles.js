import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: darkModeEnabled => {
    return {
      backgroundColor: darkModeEnabled
          ? Colors.BLACK.lightBlack
          : Colors.WHITE.default,
      flex: 1,
    };
  },
  authorDetailsContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    backgroundColor: Colors.BLACK.reallyTransBlack,
    flexDirection: 'row',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: 2,
  },
  authorTextStyle: {
    color: Colors.WHITE.lightWhite,
    fontWeight: '500',
  },
  coverImageStyle: {width: '100%', height: '100%'},
  headerContainerStyle: {width: '100%', height: '100%'},
  headerTopContainerStyle: {width: wp('100%'), height: '30%'},
  scrollContainerStyle: {
    height: '70%',
    paddingHorizontal: wp('2.5%'),
  },
  titleTextStyle: darkModeEnabled => {
    return {
      ...Styles.largeHeadingTextStyle,
      ...(darkModeEnabled && {color: Colors.WHITE.lightWhite}),
      paddingTop: hp('1%'),
    };
  },
  detailsTextStyle: darkModeEnabled => {
    return {
      ...Styles.detailsTextStyle,
      ...(darkModeEnabled && {color: Colors.WHITE.lightWhite}),
      marginTop: hp('1%'),
    };
  },
});
