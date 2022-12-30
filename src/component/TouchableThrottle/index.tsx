// @ts-ignore
import React from 'react';
import {
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { throttle } from 'lodash';
export interface PropsTouchableThrottle
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  onPress?: () => void;
  onPressDelay?: number;
  children?: JSX.Element;
  activeOpacity?: number;
  TouchableComponent?: React.ComponentClass;
}

const TouchableThrottle = (props: PropsTouchableThrottle) => {
  const {
    children,
    TouchableComponent = TouchableOpacity,
    onPress,
    onPressDelay = 1000,
    activeOpacity = 0.7,
    ...otherProps
  } = props;
  const onCustomPressThrottle = onPress
    ? throttle(onPress, onPressDelay, { leading: true, trailing: false })
    : undefined;
  return (
    <TouchableComponent
      onPress={onCustomPressThrottle}
      activeOpacity={activeOpacity}
      {...otherProps}
    >
      {children}
    </TouchableComponent>
  );
};

export default TouchableThrottle;
