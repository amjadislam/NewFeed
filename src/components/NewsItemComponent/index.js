import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const NewsItemComponent = props => {
    const {news, onPressed} = props;
    return (
        <Pressable onPress={onPressed} style={styles.mainContainerStyle}>
            <View style={styles.newsContainerStyle}>
                <Image
                    source={{uri: news.urlToImage}}
                    resizeMode={'cover'}
                    style={styles.coverImageStyle}
                />
            </View>
            <View style={styles.headingContainerStyle}>
                <Text numberOfLines={3} style={styles.headingTextStyle}>
                    {news?.title}
                </Text>
            </View>
        </Pressable>
    );
};

export default NewsItemComponent;