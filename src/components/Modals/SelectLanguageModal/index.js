import React, {useEffect, useState} from 'react';
import {Image, Modal, Pressable, SafeAreaView, Text, View} from 'react-native';
import {IC_ENGLISH_FLAG, IC_GERMAN_FLAG} from '../../../assets/images';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Strings} from '../../../constants';
import {updateAppLanguage} from '../../../store/actions';

const SelectLanguageModal = React.forwardRef((props, ref) => {
  const {darkModeEnabled, selectedLanguage} = useSelector(
    state => state.reducer.settings,
  );
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  React.useImperativeHandle(
    ref,
    () => ({
      show: () => setIsVisible(() => true),
      hide: () => setIsVisible(() => false),
    }),
    [],
  );

  useEffect(() => {
    setIsVisible(() => false);
  }, [selectedLanguage]);

  function updateLanguage(lang) {
    Strings.setLanguage(lang);
    dispatch(updateAppLanguage({selectedLanguage: lang}));
  }

  function _renderButtonsLayout() {
    return (
      <View style={styles.languageContainerStyle}>
        <Pressable
          style={styles.languageItemStyle}
          onPress={() => updateLanguage('en')}>
          <Image
            source={IC_ENGLISH_FLAG}
            resizeMode={'cover'}
            style={styles.flagImageStyle}
          />
          <Text
            style={styles.languageTitleTextStyle(
              darkModeEnabled,
              selectedLanguage === 'en',
            )}>
            {Strings.getString('english')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.languageItemStyle}
          onPress={() => updateLanguage('de')}>
          <Image
            source={IC_GERMAN_FLAG}
            resizeMode={'cover'}
            style={styles.flagImageStyle}
          />
          <Text
            style={styles.languageTitleTextStyle(
              darkModeEnabled,
              selectedLanguage === 'de',
            )}>
            {Strings.getString('german')}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Modal transparent visible={isVisible} animationType={'fade'}>
        <Pressable
          onPress={() => setIsVisible(() => false)}
          style={styles.modalContainerStyle}>
          <View style={styles.innerContainerStyle(darkModeEnabled)}>
            <Text style={styles.titleTextStyle(darkModeEnabled)}>
              {Strings.getString('languages')}
            </Text>
            <Text style={styles.detailsTextStyle(darkModeEnabled)}>
              {Strings.getString('languagesInfoText')}
            </Text>
            {_renderButtonsLayout()}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
});

export default SelectLanguageModal;
