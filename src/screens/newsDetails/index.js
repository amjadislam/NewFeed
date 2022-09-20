import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../constants';
import {BackButtonComponent} from '../../components';
import {BG_DUMMY_IMAGE} from '../../assets/images';
import Lightbox from 'react-native-lightbox';

const NewsDetailsScreen = ({
                               route: {
                                   params: {newsData},
                               },
                           }) => {
    const {goBack} = useNavigation();

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
                        <Text style={styles.authorTextStyle}>By: John Wick</Text>
                        <Text style={styles.authorTextStyle}>20-Sep-2022</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.mainContainerStyle}>
            <SafeAreaView>
                {_renderHeaderLayout()}

                <ScrollView style={styles.scrollContainerStyle}>
                    <Text style={styles.titleTextStyle}>
                        Clicking on a heading should open a detailed screen.
                    </Text>
                    <Text style={styles.detailsTextStyle}>{Strings.dummyText}</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default NewsDetailsScreen;
