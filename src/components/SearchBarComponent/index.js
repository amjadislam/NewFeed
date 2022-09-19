import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Pressable, TextInput, View, ActivityIndicator} from 'react-native';
import {IC_CROSS, IC_SEARCH} from '../../assets/svg';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getTopNews, getNewsByQuery} from '../../store/actions';
import _ from 'lodash';
import {wp} from '../../constants';

const SearchBarComponent = props => {
    const dispatch = useDispatch();
    const {onSearchChange} = props;

    const {isLoading, errorMessage, newsList, currentPage, totalResults} =
        useSelector(state => state.reducer.news);
    const [query, setQuery] = useState('');
    const refQuery = useRef('');

    useEffect(() => {
        refQuery.current = query;
    }, [query]);

    const onChangeText = text => {
        setQuery(text);
        onSearchChange(text);
        handler();
    };

    const clearSearch = () => {
        setQuery(() => '');
        onSearchChange('');
        dispatch(getTopNews({page: 1}));
    };

    const handler = useCallback(
        _.debounce(() => {
            if (refQuery.current == '') {
                clearSearch();
            } else {
                dispatch(getNewsByQuery({query: refQuery.current}));
            }
        }, 1000),
        [],
    );

    return (
        <View style={styles.mainContainerStyle}>
            <View style={styles.searchIconContainerStyle}>
                <IC_SEARCH fill={'black'} />
            </View>
            <TextInput
                style={styles.searchFieldStyle}
                value={query}
                onChangeText={onChangeText}
            />
            <View style={styles.closeContainer}>
                {isLoading ? (
                    <ActivityIndicator style={{opacity: isLoading ? 1 : 0}} />
                ) : (
                    <Pressable
                        disabled={query.length < 1}
                        style={{opacity: query.length > 0 ? 1 : 0}}
                        onPress={clearSearch}>
                        <IC_CROSS />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default SearchBarComponent;
