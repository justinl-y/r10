import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    // width: 200,
    // borderRadius: 37.5,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 37.5,
    ...Platform.select({
      ios: {
        width: 250,
      },
      android: {
        width: 300,
      },
    }),
  },
  buttonText: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    textAlign: 'center',
    margin: 15,
    color: colours.brandWhite,
    backgroundColor: 'transparent',
  },
});

export default styles;
