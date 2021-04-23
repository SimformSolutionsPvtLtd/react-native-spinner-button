import React from 'react';
import PropTypes from 'prop-types';
import ChildrenView from './ChildrenView';
import styles from './styles/SpinnerButtonStyle';
import AnimatedView from './AnimatedView';
import AnimatableView from './AnimatableView';
import { useAnimatedValues, getSpinnerStyle } from './utils'
import { Animated, View, TouchableOpacity } from 'react-native';

const AnimatedTouchablesOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);

const SpinnerButton = ({
  animationType,
  buttonContainer,
  buttonStyle,
  borderStyle,
  spinnerColor,
  spinnerType,
  onPress,
  children,
  indicatorCount,
  size,
  spinnerOptions,
  gradientName,
  gradientType,
  gradientColors,
  gradientColoroffset,
  gradientColorAngle,
  gradientRadialRadius,
  gradientButtonHeight,
  radialRadiusx,
  radialRadiusy,
  radialRadiusRX,
  radialRadiusRY,
  animatedDuration = 300,
  customSpinnerComponent,
  animateWidth,
  animateHeight,
  animateRadius,
  isLoading,
  isConnected = true,
  disabled = false,
  disableStyle,
  disableGradientColors
}) => {
  const isDisable = disabled || !isConnected;
  const isAnimationType = animationType !== null && animationType !== undefined;
  const gradientColor = isDisable ? (disableGradientColors || gradientColors) : gradientColors;
  const style = [styles.defaultButton, styles.centerAlign, buttonStyle, borderStyle, isDisable && disableStyle];
  const { height } = getSpinnerStyle(style, styles.defaultButton);
  const { handleLayout, animatedStyles, animatedChildHideStyle, animatedChildShowStyle } = useAnimatedValues({ 
    isLoading, 
    style, 
    animatedDuration, 
    animateWidth,
    animateHeight,
    animateRadius
  });
  
  return (
    <View style={[styles.buttonContainer, styles.centerAlign, buttonContainer]}>
      <AnimatedTouchablesOpacity
        activeOpacity={1}
        style={[style, animatedStyles]}
        onPress={onPress}
        disabled={isDisable || isLoading}
        onLayout={handleLayout}
      >
        <ChildrenView
          animatedStyles={animatedStyles}
          gradientType={gradientType}
          gradientColors={gradientColor}
          gradientColoroffset={gradientColoroffset}
          gradientColorAngle={gradientColorAngle}
          gradientRadialRadius={gradientRadialRadius}
          gradientButtonHeight={gradientButtonHeight}
          radialRadiusx={radialRadiusx}
          radialRadiusy={radialRadiusy}
          radialRadiusRX={radialRadiusRX}
          radialRadiusRY={radialRadiusRY}
          gradientName={gradientName}
          children={
            <>
              {isAnimationType && 
                <AnimatableView
                  animationType={animationType}
                  children={children}
                  customSpinnerComponent={customSpinnerComponent}
                  height={height}
                  size={size}
                  isLoading={isLoading}
                  animatedDuration={animatedDuration}
                  spinnerColor={spinnerColor}
                  spinnerType={spinnerType}
                  indicatorCount={indicatorCount}
                  spinnerOptions={spinnerOptions}
                />
              }
              {!isAnimationType && 
                <AnimatedView
                  animatedChildHideStyle={animatedChildHideStyle}
                  animatedChildShowStyle={animatedChildShowStyle}
                  children={children}
                  customSpinnerComponent={customSpinnerComponent}
                  height={height}
                  size={size}
                  spinnerColor={spinnerColor}
                  spinnerType={spinnerType}
                  indicatorCount={indicatorCount}
                  spinnerOptions={spinnerOptions}
                />
              }
            </>
          } 
        />
      </AnimatedTouchablesOpacity>
    </View>
  );
};

SpinnerButton.propTypes = {
  animationType: PropTypes.string,
  buttonContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  buttonStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  borderStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  spinnerColor: PropTypes.string,
  spinnerType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  indicatorCount: PropTypes.number,
  size: PropTypes.number,
  spinnerOptions: PropTypes.shape({
    waveFactor: PropTypes.number,
    waveMode: PropTypes.string
  }),
  gradientType: PropTypes.string,
  gradientColors: PropTypes.array,
  gradientColoroffset: PropTypes.array,
  gradientColorAngle: PropTypes.number,
  gradientRadialRadius: PropTypes.number,
  gradientButtonHeight: PropTypes.number,
  radialRadiusx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusRX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialRadiusRY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animatedDuration: PropTypes.number,
  customSpinnerComponent: PropTypes.node,
  animateWidth: PropTypes.number,
  animateHeight: PropTypes.number,
  animateRadius: PropTypes.number,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isConnected: PropTypes.bool,
  disableStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  disableGradientColors: PropTypes.array,
  gradientName: PropTypes.oneOf(["Warm Flame", "Night Fade", "Spring Warmth", "Juicy Peach", "Young Passion", "Lady Lips", "Sunny Morning", "Rainy Ashville", "Frozen Dreams", "Winter Neva", "Dusty Grass", "Tempting Azure", "Heavy Rain", "Amy Crisp", "Mean Fruit", "Deep Blue", "Ripe Malinka", "Cloudy Knoxville", "Malibu Beach", "New Life", "True Sunset", "Morpheus Den", "Rare Wind", "Near Moon", "Wild Apple", "Saint Petersburg", "Plum Plate", "Everlasting Sky", "Happy Fisher", "Blessing", "Sharpeye Eagle", "Ladoga Bottom", "Lemon Gate", "Itmeo Branding", "Zeus Miracle", "Old Hat", "Star Wine", "Happy Acid", "Awesome Pine", "New York", "Shy Rainbow", "Mixed Hopes", "Fly High", "Strong Bliss", "Fresh Milk", "Snow Again", "February Ink", "Kind Steel", "Soft Grass", "Grown Early", "Sharp Blues", "Shady Water", "Dirty Beauty", "Great Whale", "Teen Notebook", "Polite Rumors", "Sweet Period", "Wide Matrix", "Soft Cherish", "Red Salvation", "Burning Spring", "Night Party", "Sky Glider", "Heaven Peach", "Purple Division", "Aqua Splash", "Spiky Naga", "Love Kiss", "Clean Mirror", "Premium Dark", "Cold Evening", "Cochiti Lake", "Summer Games", "Passionate Bed", "Mountain Rock", "Desert Hump", "Jungle Day", "Phoenix Start", "October Silence", "Faraway River", "Alchemist Lab", "Over Sun", "Premium White", "Mars Party", "Eternal Constance", "Japan Blush", "Smiling Rain", "Cloudy Apple", "Big Mango", "Healthy Water", "Amour Amour", "Risky Concrete", "Strong Stick", "Vicious Stance", "Palo Alto", "Happy Memories", "Midnight Bloom", "Crystalline", "Party Bliss", "Confident Cloud", "Le Cocktail", "River City", "Frozen Berry", "Child Care", "Flying Lemon", "New Retrowave", "Hidden Jaguar", "Above The Sky", "Nega", "Dense Water", "Seashore", "Marble Wall", "Cheerful Caramel", "Night Sky", "Magic Lake", "Young Grass", "Colorful Peach", "Gentle Care", "Plum Bath", "Happy Unicorn", "African Field", "Solid Stone", "Orange Juice", "Glass Water", "North Miracle", "Fruit Blend", "Millennium Pine", "High Flight", "Mole Hall", "Space Shift", "Forest Inei", "Royal Garden", "Rich Metal", "Juicy Cake", "Smart Indigo", "Sand Strike", "Norse Beauty", "Aqua Guidance", "Sun Veggie", "Sea Lord", "Black Sea", "Grass Shampoo", "Landing Aircraft", "Witch Dance", "Sleepless Night", "Angel Care", "Crystal River", "Soft Lipstick", "Salt Mountain", "Perfect White", "Fresh Oasis", "Strict November", "Morning Salad", "Deep Relief", "Sea Strike", "Night Call", "Supreme Sky", "Light Blue", "Mind Crawl", "Lily Meadow", "Sugar Lollipop", "Sweet Dessert", "Magic Ray", "Teen Party", "Frozen Heat", "Gagarin View", "Fabled Sunset", "Perfect Blue"])
}

export default SpinnerButton;