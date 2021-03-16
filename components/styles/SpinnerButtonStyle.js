import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  absoluteView: {
    ...StyleSheet.absoluteFillObject
  },
  defaultButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#25CAC6',
  },
  defaultSpinnerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  padding: {
    paddingTop: 20
  }
});