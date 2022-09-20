import React, {useRef} from 'react';
import {Pressable, SafeAreaView, Text, View, Alert, Switch} from 'react-native';
import styles from './styles';
import {IC_NEXT_ARROW} from '../../assets/svg';
import {Colors, Strings} from '../../constants';
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
                    <Text style={styles.titleTextStyle(darkModeEnabled)}>
                        {Strings.getString('settings')}
                    </Text>
                    <Pressable
                        onPress={() => refLanguageModal?.current?.show()}
                        style={styles.menuItemStyle}>
                        <View>
                            <Text style={styles.menuItemTitleTextStyle(darkModeEnabled)}>
                                {Strings.getString('changeLanguage')}
                            </Text>
                            <Text style={styles.menuItemSubtitleTextStyle(darkModeEnabled)}>
                                {selectedLanguage === 'en'
                                    ? Strings.getString('english')
                                    : Strings.getString('german')}
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
                            {Strings.getString('darkMode')}
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
