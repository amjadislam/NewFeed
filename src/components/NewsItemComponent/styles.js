import {Platform, StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';
import Styles from "../../constants/Styles";

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
  titleTextStyle: darkModeEnabled => {
    return {
      ...Styles.headingTextStyle,
      ...(darkModeEnabled && {color: Colors.WHITE.lightWhite}),
    };
  },
  coverImageStyle: {height: '100%', width: '100%'},
  headingContainerStyle: {
    width: '100%',
    paddingHorizontal: wp('1%'),
    alignSelf: 'flex-start',
    marginTop: hp('0.5%'),
  },
});
