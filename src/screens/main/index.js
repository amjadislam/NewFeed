import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NewsContainerComponent, SearchBarComponent} from '../../components';
import styles from './styles';

const MainScreen = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <SafeAreaView>
        <SearchBarComponent />
        <NewsContainerComponent />
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
