import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../constants';
import {BackButtonComponent} from '../../components';
import {BG_DUMMY_IMAGE} from '../../assets/images';
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
                            source={BG_DUMMY_IMAGE}
                        />
                    </Lightbox>
                    <BackButtonComponent onPressed={() => goBack()} />
                    <View style={styles.authorDetailsContainerStyle}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={styles.authorTextStyle}>
                                {Strings.getString('author')}:
                            </Text>
                            <Text style={styles.authorTextStyle}>John Wick</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.authorTextStyle}>
                                {Strings.getString('publishedOn')}
                            </Text>
                            <Text style={styles.authorTextStyle}>20-09-2022</Text>
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
                        Clicking on a heading should open a detailed screen.
                    </Text>
                    <Text style={styles.detailsTextStyle(darkModeEnabled)}>
                        {Strings.getString('dummyText')}
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default NewsDetailsScreen;
