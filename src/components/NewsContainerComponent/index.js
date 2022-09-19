import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import {hp} from '../../constants';
import NewsItemComponent from '../NewsItemComponent';
import BackToTopComponent from '../BackToTopComponent';

const NewsContainerComponent = () => {
  const refFlatList = useRef(null);
  const refLastScrollY = useRef(-1);
  const refBackToTop = useRef(null);
  const [newsList, setNewsList] = useState([1, 2, 3, 4, 5, 6]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (isRefreshing) {
      setTimeout(() => {
        setIsRefreshing(() => false);
      }, 3000);
    }
  }, [isRefreshing]);

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
        renderItem={({item, index}) => <NewsItemComponent />}
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
