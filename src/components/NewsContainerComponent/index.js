import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import {hp} from '../../constants';
import NewsItemComponent from '../NewsItemComponent';
import BackToTopComponent from '../BackToTopComponent';
import {getTopNews, getNewsByQuery} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const NewsContainerComponent = props => {
    const dispatch = useDispatch();

    const {searchText} = props;

    const {isLoading, errorMessage, newsList, currentPage, totalResults} =
        useSelector(state => state.reducer.news);

    const refFlatList = useRef(null);
    const refLastScrollY = useRef(-1);
    const refBackToTop = useRef(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        getNewsData(true);
    }, []);

    const getNewsData = reset => {
        if (searchText === '') {
            let page = reset ? 1 : currentPage + 1;
            dispatch(getTopNews({page}));
        } else {
            dispatch(getNewsByQuery({query: searchText}));
        }
    };

    const loadNextPage = () => {
        if (!isLoading) {
            let page = currentPage + 1;
            dispatch(getTopNews({page}));
        }
    };

    return (
        <>
            <FlatList
                ref={refFlatList}
                decelerationRate={'fast'}
                progressViewOffset={hp('7.5%')}
                refreshing={isLoading}
                onRefresh={() => getNewsData(true)}
                ListHeaderComponent={() => <View style={{height: hp('7.5%')}} />}
                data={newsList}
                onEndReachedThreshold={0.5}
                onEndReached={loadNextPage}
                renderItem={({item, index}) => <NewsItemComponent news={item} />}
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
