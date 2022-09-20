import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {BG_DUMMY_IMAGE} from '../../assets/images';
import {useSelector} from 'react-redux';
import styles from './styles';

const NewsItemComponent = props => {
    const {news, onPressed} = props;
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);
    return (
        <Pressable onPress={onPressed} style={styles.mainContainerStyle}>
            <View style={styles.newsContainerStyle}>
                <Image
                    // source={{uri: news.urlToImage}}
                    source={BG_DUMMY_IMAGE}
                    resizeMode={'cover'}
                    style={styles.coverImageStyle}
                />
            </View>
            <View style={styles.headingContainerStyle}>
                <Text numberOfLines={3} style={styles.titleTextStyle(darkModeEnabled)}>
                    {/*{news?.title}*/}
                    Clicking on a heading should open a detailed screen with the whole
                    news text, bigger picture and meta data as author, create date etc
                </Text>
            </View>
        </Pressable>
    );
};

export default NewsItemComponent;
