import { StyleSheet } from 'react-native';
import { colours, typography } from '../../config/styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  sessionH2: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colours.textDark,
  },
  sessionH1: {
    fontFamily: typography.fontMain,
    fontSize: typography.largeSize,
    paddingTop: 20,
  },
  sessionTime: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colours.brandRed,
    paddingTop: 20,
  },
  sessionText: {
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: typography.fontMainLight,
    fontSize: 20,
    lineHeight: 30,
  },
  imageItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeftColor: colours.brandWhite,
    borderRightColor: colours.brandWhite,
    borderTopColor: colours.brandWhite,
    borderBottomColor: colours.borderLight,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  speakerImage: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    marginRight: 10,
  },
  speakerTitle: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
  },
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
  },

  ...Platform.select({
    ios: {
      linearGradient: {
        flex: 1,
        borderRadius: 37.5,
        width: 200,
      },
    },
    android: {
      linearGradient: {
        flex: 1,
        borderRadius: 37.5,
        width: 250,
      },
    },
  }),

  buttonText: {
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    textAlign: 'center',
    margin: 15,
    color: colours.brandWhite,
    backgroundColor: 'transparent',
  },
});

export default styles;
