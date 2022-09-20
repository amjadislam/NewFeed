import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NewsContainerComponent, SearchBarComponent} from '../../components';
import {useSelector} from 'react-redux';
import styles from './styles';

const MainScreen = () => {
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);
    const [search, setSearch] = useState('');

    return (
        <View style={styles.mainContainerStyle(darkModeEnabled)}>
            <SafeAreaView>
                <SearchBarComponent onSearchChange={setSearch} />
                <NewsContainerComponent searchText={search} />
            </SafeAreaView>
        </View>
    );
};

export default MainScreen;
