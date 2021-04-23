# react-native-spinner-button [![npm version](https://badge.fury.io/js/react-native-spinner-button.svg)](https://badge.fury.io/js/react-native-spinner-button)
This is a pure javascript and react-native Button component with a Spinner embeded in it.
In many of the react-native projects we have worked on required the button to be disabled when app is processing something on tap of that button, and a loading indicator on it or beside it, so the user can be made aware of app doing some processing.

From a developer perspective, it is very painful to manage two different components: a button and a spinner for lots of buttons! So when we came accross this beautiful component [SSspinnerButton](https://github.com/simformsolutions/SSSpinnerButton), we decided to do something like that in react-native.

By default it will render a Button and you have to pass a boolean _isLoading_ prop to it. When the _isLoading_ will be true, it will render a Spinner in place of the Button and once its false, the Button will be rendered back again.

![Example of react-native-spinner-button](https://github.com/simformsolutions/react-native-spinner-button/blob/master/example.gif)

## Features
* Drop in replacement for a button and indicator combo
* Very easy to use
* Pure javscript component
* Consistent look and feel on both iOS and Android
* Any spinner from [react-native-indicators](https://github.com/n4kz/react-native-indicators) can be used with most of its properties
* The animations _fadeIn_, _flipInX_ and _flipInY_ can be used from [react-native-animatable](https://github.com/oblador/react-native-animatable)
* Give any style to your button

## Getting Started

```bash
npm i react-native-spinner-button --save
```

## Usage
```javascript
import SpinnerButton from 'react-native-spinner-button';
...
// Your button component
  <SpinnerButton
    buttonStyle={styles.buttonStyle}
    isLoading={this.state.defaultLoading}
    onPress={() => {
      this.setState({ defaultLoading: true });
    }}
    indicatorCount={10}
  >
    <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
  </SpinnerButton>
```
Don't forget to set the state variable you have given to _isLoading_ prop false when processing is done for the button tap.

## Common properties
1. **animationType**
    * Type of animation for the button and spinner.
    * Default type: string
    * Default value: null | undefined
2. **buttonStyle**
    * Its a stylesheet object.
    * Default button style
      ```javascript
        defaultButtonStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          backgroundColor: '#25CAC6',
        }
      ```
3. **borderStyle**
    * Its a stylesheet object with support all basic border property like width, radius, color and style(solid, dotted and dashed) etc.
    * If you want to need to apply border in your button then you should used like 
      ```javascript
        buttonBorderStyle: {
          borderWidth: 2, 
          borderRadius: 10, 
          borderColor: 'blue', 
          borderStyle: 'solid' 
        }
      ```
4. **spinnerColor**
    * The color of the Spinner.
    * Default type: string
    * Its default value is _white_. You can give spinnerColor in all react-native acceptable formats of color.
5. **spinnerType**
    * Type of the spinner.
    * Default type: string
    * Its default value is _BallIndicator_.
    * These are all spinner types:
        1. BallIndicator
        2. BarIndicator
        3. DotIndicator
        4. MaterialIndicator
        5. PacmanIndicator
        6. PulseIndicator
        7. SkypeIndicator
        8. UIActivityIndicator
        9. WaveIndicator      
6. **isLoading**
    * The flag to render a Button or a Spinner. _false_ will render button and _true_ will render spinner.
    * Default type: boolean
    * Default value: _false_
7. **onPress**
    * The function to execute on tap of the button.
    * Default type: function.
    * Default value: _nothing is executed_
8. **indicatorCount**
    * The count property of react-native-indicators.
    * Default type: number
    * Default value: null | undefined
9. **size**
    * The size of the Spinner.
    * Default type: number
    * Its default value _veries according to the spinnerType_.
10. **spinnerOptions**
    * An object of waveMode for WaveIndicator for WaveIndicator.
    * Default type: Object
    * For more details about these properties, refer [react-native-indicators](https://github.com/n4kz/react-native-indicators)
11. **gradientType**
    * Gradients allow you to show more than one color with a smooth transition between the colors (think Instagram logo). 
    * They come in handy when trying to create multi-color backgrounds or custom buttons. You can have gradients in different varieties, horizontally, vertically, diagonally, etc.
    * Currently, we are supporting two types of gradient 1.Linear Gradient & 2.Radial Gradient. 
12. **gradientColors**
    * This is how we pass the colors we want to be displayed, colors can be passed in a different format, name, rgba, hex etc. 
    * The colors should be ordered the way we want them to be displayed. 
    * Eg. colors={[ “purple”, “white” ]} the gradient will move from purple to white.
13. **gradientColoroffset**
    * An array of string that define where each color will stop in the gradient. 
    * These values are also passed as a percentage of the entire gradient from 0% – 100% and have to map the corresponding colors passed in length and position. 
    * For colors={[“red”, “yellow”, “green”}] then we’ll have locations={['0%', '50%', '80%']} with first color (red) covering '0%' – '50%', second (yellow) going from '50%' – '80%' and yellow '80%' – '100%'
14. **gradientColorAngle**
    * The gradient line's angle of direction. A value of 0deg is equivalent to to top; increasing values rotate clockwise from there.
    * The angle range of 0 to 360.
    * [More detail to read](https://www.quirksmode.org/css/images/angles.html)
15. **gradientRadialRadius**
    * This property used for Radial type gradient in set radius of radial gradient.
16. **gradientButtonHeight**
    * The size of the gradient component.
    * Default type: number
17. **radialRadiusx**
    * The x coordinate of the center of the radial gradient.
18. **radialRadiusy**
    * The y coordinate of the center of the radial gradient.
19. **radialRadiusRX**
    * The horizontal radius of the radial gradient defining ellipse.
20. **radialRadiusRY**
    * The vertical radius of the radial gradient defining ellipse.
21. **animatedDuration**
    * Used for animation time, how long you have to execute your animation.
22. **customSpinnerComponent**
    * This props will allow you to add your own custom spinner component.
23. **animateWidth**
    * This props used to set component width when progress/loading will start..
    * If you want to not set this props then identify  width and height which is minimum and then used that value.
24. **animateHeight**
    * This props used to set component height when progress/loading will start.
    * If you want to not set this props then identify  width and height which is minimum and then used that value.
25. **animateRadius**
    * This props used to set component radius when progress/loading will start.
    * If you want to not set this props then create circle shape.
26. **isConnected**
    * The flag to identify network connection and based on flag set user iteration. _false_ will render button with disable mode and _true_ will render button with normal mode.
    * Default type: boolean
    * Default value: _true_
27. **disabled**
    * The flag to identify button enable/disable. _true_ will render button with disable mode and _false_ will render button with normal mode.
    * Default type: boolean
    * Default value: _false_
28. **disableStyle**
    * Its a stylesheet object.
    * This style apply when identify button disable or if network connect not available.
    * Default value: null | undefined
29. **gradientName**
    * Its a sample gradient name. 
    * Default type: string
    * Its default value is null | undefined.
    * This properties used whenever you want to need gradient but not pass __gradientColors__, __gradientColoroffset__ and __gradientColorAngle__ properties.
    * if you want to see color combination of [Sample gradient](https://fx-gradient-previewer.netlify.app/)
30. **disableGradientColors**
    * This is how we pass the colors we want to be displayed when button disable, colors can be passed in a different format, name, rgba, hex etc. 
    * The colors should be ordered the way we want them to be displayed. 
    * Eg. colors={[ “purple”, “white” ]} the gradient will move from purple to white.

## Example
  A full working example project is here [Example](https://github.com/simformsolutions/react-native-spinner-button/tree/master/Example)

## Acknowledgments and Big Thanks to
* [react-native-indicators](https://github.com/n4kz/react-native-indicators)
* [react-native-animatable](https://github.com/oblador/react-native-animatable)
* [SSspinnerButton](https://github.com/simformsolutions/SSSpinnerButton)

## Roadmap (What to do in next)
1. Support inbuild different gradient with name.
2. Support result state (InPreogress, InSuccess and InFailure).
3. Neon style apply
4. Button shadow 
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
