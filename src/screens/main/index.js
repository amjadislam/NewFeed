import React, {useEffect, useRef, useState} from 'react';
import {Linking, SafeAreaView, View} from 'react-native';
import {NewsContainerComponent, SearchBarComponent} from '../../components';
import {useSelector} from 'react-redux';
import styles from './styles';

const MainScreen = () => {
  const {darkModeEnabled} = useSelector(state => state.reducer.settings);
  const refNewsContainer = useRef(null);
  const refInitialURL = useRef('');
  const [initialSearch, setInitialSearch] = useState('');

  function handleOpenURL(e, initial: boolean = false) {
    let route;
    if (initial) {
      route = e?.replace(/.*?:\/\//g, '');
    } else {
      route = e?.url?.replace(/.*?:\/\//g, '');
    }
    setInitialSearch(() => route.split('news/')[1]);
    refNewsContainer?.current?.makeQuery(route.split('news/')[1]);
  }

    useEffect(() => {
        Linking.getInitialURL()
            .then(ev => {
                if (ev) {
                    if (refInitialURL?.current !== ev) {
                        refInitialURL.current = ev;
                        handleOpenURL(ev, true);
                    }
                }
            })
            .catch(err => {
                console.warn('An error occurred', err);
            });
        Linking.addEventListener('url', handleOpenURL);
        return () => {
            Linking.removeAllListeners('url');
        };
    }, []);

    return (
        <View
            key={initialSearch}
            style={styles.mainContainerStyle(darkModeEnabled)}>
            <SafeAreaView>
                <SearchBarComponent
                    onSearchChange={query =>
                        refNewsContainer?.current?.updateQueryText(query)
                    }
                    initialSearch={initialSearch}
                />
                <NewsContainerComponent ref={refNewsContainer} />
            </SafeAreaView>
        </View>
    );
};

export default MainScreen;
