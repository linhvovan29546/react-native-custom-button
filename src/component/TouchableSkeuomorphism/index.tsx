// @ts-ignore
import React from 'react';
import { useCallback, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import styles from './styles';
import TouchableThrottle, {
  PropsTouchableThrottle,
} from '../TouchableThrottle';
import useStyle from './useStyle';
import { colors } from '../../constants/vars';
interface Props extends PropsTouchableThrottle {
  children: JSX.Element;
  style?: ViewStyle;
  size?: number;
  startColor?: string;
  endColor?: string;
  angle?: number;
  onPressIn?: () => void;
  onPressOut?: () => void;
}
const TouchableSkeuomorphism = (props: Props) => {
  const {
    size = 12,
    angle = 145,
    startColor = colors.WHITE,
    endColor = colors.END_WHITE,
    onPressIn,
    onPressOut,
    ...otherProps
  } = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
    onPressIn && onPressIn();
  }, [setDown, onPressIn]);
  const handlePressOut = useCallback(() => {
    setDown(false);
    onPressOut && onPressOut();
  }, [setDown, onPressOut]);

  const {
    buttonCommonStyle,
    buttonOuterStyle,
    buttonInnerStyle,
    gradColors,
    buttonFaceStyle,
  } = useStyle({
    size: size,
    isDown: isDown,
    downColor: startColor,
    upColor: endColor,
  });

  return (
    <TouchableThrottle
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      TouchableComponent={TouchableWithoutFeedback}
      {...otherProps}
    >
      <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
        <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <LinearGradient
            colors={gradColors}
            useAngle={true}
            angle={angle}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={[styles.buttonFace, buttonFaceStyle, props.style]}
          >
            {props.children}
          </LinearGradient>
        </View>
      </View>
    </TouchableThrottle>
  );
};

export default TouchableSkeuomorphism;
