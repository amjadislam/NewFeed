import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, View, Alert, Switch} from 'react-native';
import styles from './styles';
import Styles from '../../constants/Styles';
import {IC_NEXT_ARROW} from '../../assets/svg';
import {Colors} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {enableDarkMode} from '../../store/actions';

const SettingsScreen = () => {
    const {darkModeEnabled, selectedLanguage} = useSelector(
        state => state.reducer.settings,
    );
    const dispatch = useDispatch();
    // const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    return (
        <View style={styles.mainContainerStyle}>
            <SafeAreaView>
                <View style={{}}>
                    <Text style={styles.titleTextStyle}>Settings</Text>
                    <Pressable
                        onPress={() => Alert.alert('Under Development!')}
                        style={styles.menuItemStyle}>
                        <View>
                            <Text style={{...Styles.headingTextStyle}}>Change Language</Text>
                            <Text style={styles.selectedLanguageStyle}>
                                {selectedLanguage}
                            </Text>
                        </View>
                        <IC_NEXT_ARROW fill={'black'} />
                    </Pressable>
                    <View style={styles.menuItemStyle}>
                        <Text style={{...Styles.headingTextStyle}}>Dark Mode</Text>
                        <Switch
                            trackColor={{
                                true: Colors.LIGHT_BLUE.default,
                            }}
                            value={darkModeEnabled}
                            onValueChange={value => {
                                dispatch(enableDarkMode({darkMode: value}));
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
