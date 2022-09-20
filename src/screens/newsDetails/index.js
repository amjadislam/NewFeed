import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../constants';
import {BackButtonComponent} from '../../components';
import Lightbox from 'react-native-lightbox';
import {useSelector} from 'react-redux';

const NewsDetailsScreen = ({
                               route: {
                                   params: {newsData},
                               },
                           }) => {
    const {goBack} = useNavigation();
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);

    function _renderHeaderLayout() {
        return (
            <View style={styles.headerTopContainerStyle}>
                <View style={styles.headerContainerStyle}>
                    <Lightbox>
                        <Image
                            resizeMode={'cover'}
                            style={styles.coverImageStyle}
                            source={{uri: newsData.urlToImage}}
                        />
                    </Lightbox>
                    <BackButtonComponent onPressed={() => goBack()} />
                    <View style={styles.authorDetailsContainerStyle}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={styles.authorTextStyle}>
                                {Strings.getString('author')}:
                            </Text>
                            <Text style={styles.authorTextStyle}>{newsData?.author}</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.authorTextStyle}>
                                {Strings.getString('publishedOn')}
                            </Text>
                            <Text style={styles.authorTextStyle}>
                                {newsData?.publishedAt?.split('T')[0]}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.mainContainerStyle(darkModeEnabled)}>
            <SafeAreaView>
                {_renderHeaderLayout()}

                <ScrollView style={styles.scrollContainerStyle}>
                    <Text style={styles.titleTextStyle(darkModeEnabled)}>
                        {newsData.title}
                    </Text>
                    <Text style={styles.descriptionTextStyle(darkModeEnabled)}>
                        {newsData.description}
                    </Text>
                    <Text style={styles.detailsTextStyle(darkModeEnabled)}>
                        {newsData.content}
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default NewsDetailsScreen;
