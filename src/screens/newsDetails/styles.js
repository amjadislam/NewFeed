import {StyleSheet} from 'react-native';
import {hp, wp} from "../../constants";
import Styles from "../../constants/Styles";

export default StyleSheet.create({
  mainContainerStyle: {backgroundColor: '#FFFFFF', flex: 1},
  authorDetailsContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.3)',
    flexDirection: 'row',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: 2,
  },
  authorTextStyle: {
    color: 'white',
    fontWeight: '500',
  },
  coverImageStyle: {width: '100%', height: '100%'},
  headerContainerStyle: {width: '100%', height: '100%'},
  headerTopContainerStyle: {width: wp('100%'), height: '30%'},
  scrollContainerStyle: {
    backgroundColor: 'white',
    height: '70%',
    paddingHorizontal: wp('2.5%'),
  },
  titleTextStyle: {
    ...Styles.largeHeadingTextStyle,
    paddingTop: hp('1%'),
  },
  detailsTextStyle: {...Styles.detailsTextStyle, marginTop: hp('1%')},
});
