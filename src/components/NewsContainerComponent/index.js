import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import NewsItemComponent from '../NewsItemComponent';
import {useNavigation} from '@react-navigation/native';
import BackToTopComponent from '../BackToTopComponent';
import {getTopNews, getNewsByQuery} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {hp} from '../../constants';

const NewsContainerComponent = () => {
    const {navigate} = useNavigation();
    const dispatch = useDispatch();

    const {isLoading, errorMessage, newsList, currentPage, totalResults} =
        useSelector(state => state.reducer.news);

    const refFlatList = useRef(null);
    const refLastScrollY = useRef(-1);
    const refBackToTop = useRef(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        getNewsData(true);
        if (isRefreshing) {
            setTimeout(() => {
                setIsRefreshing(() => false);
            }, 3000);
        }
    }, [isRefreshing]);

    const getNewsData = reset => {
        let page = reset ? 1 : currentPage + 1;
        dispatch(getTopNews({page}));
    };

    return (
        <>
            <FlatList
                ref={refFlatList}
                decelerationRate={'fast'}
                progressViewOffset={hp('7.5%')}
                refreshing={isRefreshing}
                onRefresh={() => setIsRefreshing(() => true)}
                ListHeaderComponent={() => <View style={{height: hp('7.5%')}} />}
                data={newsList}
                renderItem={({item, index}) => (
                    <NewsItemComponent
                        news={item}
                        onPressed={() => {
                            navigate('NewsDetailsScreen');
                        }}
                    />
                )}
                onScroll={e => {
                    if (e.nativeEvent.contentOffset.y > 400) {
                        refBackToTop?.current?.show();
                    } else {
                        refBackToTop?.current?.hide();
                    }
                }}
            />
            <BackToTopComponent
                ref={refBackToTop}
                onPressed={() => {
                    refFlatList?.current?.scrollToIndex({
                        index: 0,
                        viewOffset: hp('7.5%'),
                        animated: false,
                    });
                }}
            />
        </>
    );
};

export default NewsContainerComponent;