import { Animated } from "react-native";
import type { ViewStyle } from "react-native";
import type { CommonViewProps } from "../AnimatableView/types";

type AnimatedStyle = Animated.WithAnimatedValue<ViewStyle>;

export type AnimatedViewProps = CommonViewProps & {
  animatedChildHideStyle?: AnimatedStyle;
  animatedChildShowStyle?: AnimatedStyle;
};
