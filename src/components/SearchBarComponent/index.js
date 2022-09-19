import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {IC_CROSS, IC_SEARCH} from '../../assets/svg';
import styles from './styles';

const SearchBarComponent = () => {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.searchIconContainerStyle}>
        <IC_SEARCH fill={'black'} />
      </View>
      <TextInput
        style={styles.searchFieldStyle}
        value={query}
        onChangeText={setQuery}
      />
      <Pressable
        disabled={query.length < 1}
        style={{opacity: query.length > 0 ? 1 : 0}}
        onPress={() => setQuery(() => '')}>
        <IC_CROSS />
      </Pressable>
    </View>
  );
};

export default SearchBarComponent;
