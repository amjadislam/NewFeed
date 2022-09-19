import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const SettingsScreen = () => {
    return (
        <View style={styles.mainContainerStyle}>
            <SafeAreaView>
                <View style={{alignSelf: 'center'}}>
                    <Text>Settings Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
