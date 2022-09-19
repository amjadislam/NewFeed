import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <SafeAreaView>
        <Text>Settings Screen</Text>
      </SafeAreaView>
    </View>
  );
};

export default SettingsScreen;
