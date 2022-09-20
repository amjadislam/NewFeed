import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const EmptyListComponent = () => {
  const {darkModeEnabled} = useSelector(state => state.reducer.settings);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.emptyTextStyle(darkModeEnabled)}>
        Nothing to show
      </Text>
    </View>
  );
};

export default EmptyListComponent;
