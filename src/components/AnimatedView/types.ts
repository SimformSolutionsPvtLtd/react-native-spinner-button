import type { ViewStyle, Animated } from 'react-native';
import type { CommonViewProps } from '../../components';

export type AnimatedStyle = Animated.WithAnimatedValue<ViewStyle>;

export type AnimatedViewProps = CommonViewProps & {
  animatedChildHideStyle?: AnimatedStyle;
  animatedChildShowStyle?: AnimatedStyle;
};
