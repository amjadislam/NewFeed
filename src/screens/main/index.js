import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NewsContainerComponent, SearchBarComponent} from '../../components';
import styles from './styles';

const MainScreen = () => {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.mainContainerStyle}>
            <SafeAreaView>
                <SearchBarComponent onSearchChange={setSearch} />
                <NewsContainerComponent searchText={search} />
            </SafeAreaView>
        </View>
    );
};

export default MainScreen;
