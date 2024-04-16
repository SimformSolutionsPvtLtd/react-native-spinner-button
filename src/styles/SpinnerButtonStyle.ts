import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultButton: {
    height: 50,
  },
  absoluteView: {
    ...StyleSheet.absoluteFillObject,
  },
  defaultGradientContainerStyle: {
    width: '100%',
  },
  animatedViewContainer: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  rippleButtonStyle: {
    width: '100%',
  }
});
