import React, {useEffect, useRef} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import NewsItemComponent from '../NewsItemComponent';
import {useNavigation} from '@react-navigation/native';
import BackToTopComponent from '../BackToTopComponent';
import {getTopNews, getNewsByQuery} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, hp} from '../../constants';
import {EmptyListComponent} from '../index';

const NewsContainerComponent = React.forwardRef((props, ref) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const refSearchText = useRef('');

  React.useImperativeHandle(
    ref,
    () => ({
      makeQuery: query => {
        dispatch(getNewsByQuery({query: query}));
      },
      updateQueryText: query => {
        refSearchText.current = query;
      },
    }),
    [],
  );

  const {isLoading, newsList, currentPage} = useSelector(
    state => state.reducer.news,
  );

  const refFlatList = useRef(null);
  const refBackToTop = useRef(null);

  useEffect(() => {
    getNewsData(true);
  }, []);

  const getNewsData = reset => {
    if (refSearchText?.current === '') {
      let page = reset ? 1 : currentPage + 1;
      dispatch(getTopNews({page}));
    } else {
      dispatch(getNewsByQuery({query: refSearchText?.current}));
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
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => getNewsData(true)}
            title=""
            tintColor={Colors.LIGHT_BLUE.default}
          />
        }
        ListHeaderComponent={() => <View style={{height: hp('7.5%')}} />}
        data={newsList}
        ListEmptyComponent={() => <EmptyListComponent />}
        onEndReachedThreshold={0.5}
        onEndReached={loadNextPage}
        renderItem={({item, index}) => (
          <NewsItemComponent
            news={item}
            onPressed={() => {
              navigate('NewsDetailsScreen', {
                newsData: item,
              });
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
});

export default NewsContainerComponent;
