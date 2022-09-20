import styles from './styles';
import {IC_BACK_ARROW} from '../../../assets/svg';
import {Pressable, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../../../constants';

const BackButtonComponent = props => {
  const {darkModeEnabled} = useSelector(state => state.reducer.settings);
  const {onPressed} = props;
  return (
    <Pressable
      style={styles.backButtonStyle(darkModeEnabled)}
      onPress={onPressed}>
      <View style={styles.backIconStyle}>
        <IC_BACK_ARROW fill={Colors.LIGHT_BLUE.default} />
      </View>
    </Pressable>
  );
};

export default BackButtonComponent;
