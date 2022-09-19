import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {IC_TOP_ARROW} from '../../assets/svg';
import styles from './styles';

const BackToTopComponent = React.forwardRef((props, ref) => {
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
    <Pressable onPress={onPressed} style={styles.mainContainerStyle}>
      <IC_TOP_ARROW fill={'black'} />
    </Pressable>
  );
});

export default BackToTopComponent;
