import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export default StyleSheet.create({
  mainContainerStyle: darkModeEnabled => {
    return {
      backgroundColor: darkModeEnabled ? Colors.BLACK.lightBlack : '#FFFFFF',
      flex: 1,
    };
  },
});
