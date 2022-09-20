import {StyleSheet} from 'react-native';
import {Colors, hp} from '../../constants';

export default StyleSheet.create({
  emptyTextStyle: darkModeEnabled => {
    return {
      color: darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default,
      fontSize: 20,
    };
  },
  containerStyle: {alignSelf: 'center', marginTop: hp('4%')},
});
