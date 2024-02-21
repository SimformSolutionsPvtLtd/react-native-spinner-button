import type { ViewStyle, Animated } from 'react-native';
import type { CommonViewProps } from '../../components';

type AnimatedStyle = Animated.WithAnimatedValue<ViewStyle>;

export type AnimatedViewProps = CommonViewProps & {
  animatedChildHideStyle?: AnimatedStyle;
  animatedChildShowStyle?: AnimatedStyle;
};
