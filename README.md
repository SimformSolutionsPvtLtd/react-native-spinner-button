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
    * Default value: _fadeIn_
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
3. **indicatorCount**
    * The count property of react-native-indicators.
    * Default type: number
    * Default value: _fadeIn_
4. **isLoading**
    * The flag to render a Button or a Spinner. _false_ will render button and _true_ will render button.
    * Default type: boolean
    * Default value: _false_
5. **onPress**
    * The function to execute on tap of the button.
    * Default type: functin.
    * Default value: _nothing is executed_
6. **size**
    * The size of the Spinner.
    * Default type: number
    * Its default value _veries according to the spinnerType_.
7. **spinnerColor**
    * The color of the Spinner.
    * Default type: string
    * Its default value is _white_. You can give spinnerColor in all react-native acceptable formats of color.
8. **spinnerType**
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
9. **spinnerOptions**
    * An object of waveMode for WaveIndicator for WaveIndicator.
    * Default type: Object
    * For more details about these properties, refer [react-native-indicators](https://github.com/n4kz/react-native-indicators)

## Example
  A full working example project is here [Example](https://github.com/simformsolutions/react-native-spinner-button/tree/master/Example)

## Acknowledgments and Big Thanks to
* [react-native-indicators](https://github.com/n4kz/react-native-indicators)
* [react-native-animatable](https://github.com/oblador/react-native-animatable)
* [SSspinnerButton](https://github.com/simformsolutions/SSSpinnerButton)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
