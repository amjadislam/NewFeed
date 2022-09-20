import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: {backgroundColor: '#FFFFFF', flex: 1},
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
    paddingVertical: hp('1.5%'),
    marginHorizontal: wp('2.5'),
    alignItems: 'center',
  },
  titleTextStyle: {
    ...Styles.largeHeadingTextStyle,
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  selectedLanguageStyle: {...Styles.detailsTextStyle, marginTop: hp('0.8%')},
});
