import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    height: 50,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#893346',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  ripple: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 10,
    height: 10,
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
});
