import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import * as Animatable from 'react-native-animatable';
import styles from './styles/SpinnerButtonStyle';

function getSpinnerBackgroundStyle(spinnerType, customButtonStyle, defaultButtonStyle, spinnerOptions) {
  const borderRadius = customButtonStyle.height ? customButtonStyle.height / 2 : defaultButtonStyle.height / 2;
  let height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  let width = height;
  let backgroundColor = customButtonStyle.backgroundColor ? customButtonStyle.backgroundColor : defaultButtonStyle.backgroundColor;
  let margin = customButtonStyle.margin ? customButtonStyle.margin : defaultButtonStyle.margin;
  let marginTop = customButtonStyle.marginTop ? customButtonStyle.marginTop : defaultButtonStyle.margin;
  let marginBottom = customButtonStyle.marginBottom ? customButtonStyle.marginBottom : defaultButtonStyle.margin;
  let marginLeft = customButtonStyle.marginLeft ? customButtonStyle.marginLeft : defaultButtonStyle.margin;
  let marginRight = customButtonStyle.marginRight ? customButtonStyle.marginRight : defaultButtonStyle.margin;
  let marginVertical = customButtonStyle.marginVertical ? customButtonStyle.marginVertical : defaultButtonStyle.margin;
  let marginHorizontal = customButtonStyle.marginHorizontal ? customButtonStyle.marginHorizontal : defaultButtonStyle.margin;
  let customSpinnerStyle = {
    height,
    width,
    backgroundColor,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  };

  switch (spinnerType) {
    case 'BallIndicator':
      return customSpinnerStyle;
    case 'BarIndicator':
      return {
        height,
        // width: height * 2,
        paddingHorizontal: 10,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'DotIndicator':
      return {
        height,
        // width: height * 3,
        paddingHorizontal: 10,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'MaterialIndicator':
      return customSpinnerStyle;
    case 'PacmanIndicator':
      return {
        height,
        width: height * 2,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'PulseIndicator':
      return customSpinnerStyle;
    case 'SkypeIndicator':
      // let skypeIndicatorSize = width;
      // if (spinnerOptions !== undefined && spinnerOptions.maxScale !== undefined && spinnerOptions.maxScale > 1) {
      //   skypeIndicatorSize = width * spinnerOptions.maxScale;
      // }
      // return {
      //   height: skypeIndicatorSize,
      //   width: skypeIndicatorSize,
      //   backgroundColor,
      //   margin,
      //   borderRadius: skypeIndicatorSize / 2,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // };
      return customSpinnerStyle;
    case 'UIActivityIndicator':
      return customSpinnerStyle;
    case 'WaveIndicator':
      return customSpinnerStyle;
    default:
      return customSpinnerStyle;
  }
}

const SpinnerComponent = (props) => {
  const {
    buttonStyle,
    spinnerColor,
    spinnerType,
    isLoading,
    onPress,
    children,
    indicatorCount,
    size,
    animationType,
    spinnerOptions,
  } = props;
  let customButtonStyle = StyleSheet.flatten(buttonStyle);
  let defaultButtonStyle = StyleSheet.flatten(styles.defaultButtonStyle);
  let height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  let width = customButtonStyle.width ? customButtonStyle.width : defaultButtonStyle.width;
  let customSpinnerStyle = getSpinnerBackgroundStyle(spinnerType, customButtonStyle, defaultButtonStyle, spinnerOptions);
  switch (spinnerType) {
    case 'BallIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <BallIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={height - 20}
            />
          </Animatable.View>
        </View>
      );
    case 'BarIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <BarIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={height - 10}
            />
          </Animatable.View>
        </View>
      );
    case 'DotIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <DotIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={size}
            />
          </Animatable.View>
        </View>
      );
    case 'MaterialIndicator':
      // Note: To overcome https://github.com/n4kz/react-native-indicators/issues/11 and 
      //   https://github.com/n4kz/react-native-indicators/issues/6 ActivityIndicator is used in android
      if (Platform.OS === 'android') {
        return (
          <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
            <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
              <ActivityIndicator
                color={spinnerColor || 'rgb(255, 255, 255)'}
                size={height - 10}
              />
            </Animatable.View>
          </View>
        );
      }
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <MaterialIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              size={height - 10}
            />
          </Animatable.View>
        </View>
      );
    case 'PacmanIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <PacmanIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              size={height - 10}
            />
          </Animatable.View>
        </View>
      );
    case 'PulseIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <PulseIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              size={height}
            />
          </Animatable.View>
        </View>
      );
    case 'SkypeIndicator':
      let minScale = 0.2;
      let maxScale = 1.0;
      if (spinnerOptions !== undefined && spinnerOptions.minScale !== undefined) {
        minScale = spinnerOptions.minScale;
      }
      if (spinnerOptions !== undefined && spinnerOptions.maxScale !== undefined) {
        maxScale = spinnerOptions.maxScale;
      }
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <SkypeIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              // size={height - (10 * spinnerOptions.maxScale)}
              size={height - 10}
            // minScale={minScale}
            // maxScale={maxScale}
            />
          </Animatable.View>
        </View>
      );
    case 'UIActivityIndicator':
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <UIActivityIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={height - 10}
            />
          </Animatable.View>
        </View>
      );
    case 'WaveIndicator':
      let waveFactor = 0.54;
      let waveMode = 'fill';
      if (spinnerOptions !== undefined && spinnerOptions.waveFactor !== undefined) {
        waveFactor = spinnerOptions.waveFactor;
      }
      if (spinnerOptions !== undefined && spinnerOptions.waveMode !== undefined) {
        waveMode = spinnerOptions.waveMode;
      }
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <WaveIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={height - 10}
              waveFactor={waveFactor}
              waveMode={waveMode}
            />
          </Animatable.View>
        </View>
      );
    default:
      return (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <BallIndicator
              color={spinnerColor || 'rgb(255, 255, 255)'}
              count={indicatorCount}
              size={height - 20}
            />
          </Animatable.View>
        </View>
      );
  }
}

const CustomButton = (props) => {
  const { animationType, buttonStyle, onPress, isLoading, children } = props;
  return (
    <Animatable.View animation={animationType || 'fadeIn'}>
      <TouchableOpacity
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

const Spinner = (props) => {
  const {
    animationType,
    buttonStyle,
    spinnerColor,
    spinnerType,
    isLoading,
    onPress,
    children,
    indicatorCount,
    size,
    spinnerOptions,
  } = props;
  if (isLoading) {
    return (
      <SpinnerComponent
        spinnerColor={spinnerColor || 'rgb(255, 255, 255)'}
        spinnerType={spinnerType}
        buttonStyle={buttonStyle}
        indicatorCount={indicatorCount}
        spinnerOptions={spinnerOptions}
        size={size}
        isLoading={isLoading}
        animationType={animationType}
        spinnerOptions={spinnerOptions}
      />
    );
  }
};

export default Spinner;