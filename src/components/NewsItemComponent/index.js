import React from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {BG_DUMMY_IMAGE} from '../../assets/images';

const NewsItemComponent = () => {
  return (
    <Pressable
      onPress={() => Alert.alert('Under Development!')}
      style={styles.mainContainerStyle}>
      <View style={styles.newsContainerStyle}>
        <Image
          source={BG_DUMMY_IMAGE}
          resizeMode={'cover'}
          style={styles.coverImageStyle}
        />
      </View>
      <View style={styles.headingContainerStyle}>
        <Text numberOfLines={3} style={styles.headingTextStyle}>
          President Prohibit National Saving For Changing Rates on Existing
          Certificates Retrospectively
        </Text>
      </View>
    </Pressable>
  );
};

export default NewsItemComponent;
