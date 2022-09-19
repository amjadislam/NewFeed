import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const NewsDetailsScreen = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.mainContainerStyle}>
      <SafeAreaView>
        <View style={{alignSelf: 'center'}}>
          <Text onPress={() => goBack()}>News Details Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewsDetailsScreen;
