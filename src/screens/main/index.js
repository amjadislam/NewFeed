import React from 'react';
import {SafeAreaView, View} from 'react-native';
// import {NewsContainerComponent} from './../../components';
import styles from './styles';
import NewsContainerComponent from "../../components/NewsContainerComponent";

const MainScreen = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <SafeAreaView>
        <NewsContainerComponent />
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
