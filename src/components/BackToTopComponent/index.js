import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {IC_TOP_ARROW} from '../../assets/svg';
import styles from './styles';
import {useSelector} from 'react-redux';
import {Colors} from '../../constants';

const BackToTopComponent = React.forwardRef((props, ref) => {
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);
    const {onPressed} = props;
    const [shouldShow, setShouldShow] = useState(false);

    React.useImperativeHandle(
        ref,
        () => ({
            show: () => setShouldShow(() => true),
            hide: () => setShouldShow(() => false),
        }),
        [],
    );

    if (!shouldShow) {
        return null;
    }

    return (
        <Pressable
            onPress={onPressed}
            style={styles.mainContainerStyle(darkModeEnabled)}>
            <IC_TOP_ARROW fill={Colors.LIGHT_BLUE.default} />
        </Pressable>
    );
});

export default BackToTopComponent;
