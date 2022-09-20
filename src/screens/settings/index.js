import React, {useRef} from 'react';
import {Pressable, SafeAreaView, Text, View, Alert, Switch} from 'react-native';
import styles from './styles';
import {IC_NEXT_ARROW} from '../../assets/svg';
import {Colors} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {enableDarkMode} from '../../store/actions';
import {SelectLanguageModal} from '../../components';

const SettingsScreen = () => {
    const refLanguageModal = useRef(null);
    const {darkModeEnabled, selectedLanguage} = useSelector(
        state => state.reducer.settings,
    );
    const dispatch = useDispatch();
    return (
        <View style={styles.mainContainerStyle(darkModeEnabled)}>
            <SafeAreaView>
                <>
                    <Text style={styles.titleTextStyle(darkModeEnabled)}>Settings</Text>
                    <Pressable
                        onPress={() => refLanguageModal?.current?.show()}
                        style={styles.menuItemStyle}>
                        <View>
                            <Text style={styles.menuItemTitleTextStyle(darkModeEnabled)}>
                                Change Language
                            </Text>
                            <Text style={styles.menuItemSubtitleTextStyle(darkModeEnabled)}>
                                {selectedLanguage}
                            </Text>
                        </View>
                        <IC_NEXT_ARROW
                            fill={
                                darkModeEnabled ? Colors.WHITE.default : Colors.BLACK.lightBlack
                            }
                        />
                    </Pressable>
                    <View style={styles.menuItemStyle}>
                        <Text style={styles.menuItemTitleTextStyle(darkModeEnabled)}>
                            Dark Mode
                        </Text>
                        <Switch
                            trackColor={{
                                true: Colors.LIGHT_BLUE.default,
                                false: Colors.BLACK.reallyTransBlack,
                            }}
                            thumbColor={darkModeEnabled ? 'white' : Colors.LIGHT_BLUE.default}
                            value={darkModeEnabled}
                            onValueChange={value =>
                                dispatch(enableDarkMode({darkMode: value}))
                            }
                        />
                    </View>
                    <SelectLanguageModal ref={refLanguageModal} />
                </>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
