import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  centerAlign: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  defaultButton: {
    height: 50
  },
  absoluteView: {
    ...StyleSheet.absoluteFillObject
  },
  defaultGradientContainerStyle: {
    width: '100%'
  }
});