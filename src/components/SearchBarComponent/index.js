import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Pressable, TextInput, View, ActivityIndicator} from 'react-native';
import {IC_CROSS, IC_SEARCH} from '../../assets/svg';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getTopNews, getNewsByQuery} from '../../store/actions';
import _ from 'lodash';
import {Colors, Strings} from '../../constants';

const SearchBarComponent = props => {
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);
    const dispatch = useDispatch();
    const {onSearchChange} = props;

    const {isLoading} = useSelector(state => state.reducer.news);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <View style={styles.mainContainerStyle(darkModeEnabled)}>
            <View style={styles.searchIconContainerStyle}>
                <IC_SEARCH
                    fill={darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default}
                />
            </View>
            <TextInput
                style={styles.searchFieldStyle(darkModeEnabled)}
                value={query}
                placeholder={Strings.getString('search') + '...'}
                placeholderTextColor={
                    darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default
                }
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
                        <IC_CROSS
                            fill={
                                darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.default
                            }
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default SearchBarComponent;
