import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constants';
import Styles from '../../constants/Styles';

export default StyleSheet.create({
  mainContainerStyle: {
    position: 'absolute',
    top: Styles.listItemsOffset.height,
    zIndex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 90,
    alignItems: 'center',
    backgroundColor: '#F6F8FC',
    ...Styles.shadowStyle,
  },
  searchIconContainerStyle: {paddingHorizontal: wp('3%')},
  searchFieldStyle: {
    height: hp('5%'),
    width: '75%',
    marginEnd: wp('3%'),
  },
});
