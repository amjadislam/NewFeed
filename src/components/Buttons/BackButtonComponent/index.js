import styles from './styles';
import {IC_BACK_ARROW} from '../../../assets/svg';
import {Pressable, View} from 'react-native';
import React from 'react';

const BackButtonComponent = props => {
  const {onPressed} = props;
  return (
    <Pressable style={styles.backButtonStyle} onPress={onPressed}>
      <View style={styles.backIconStyle}>
        <IC_BACK_ARROW fill={'black'} />
      </View>
    </Pressable>
  );
};

export default BackButtonComponent;
