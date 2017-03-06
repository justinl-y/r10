import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },

  imageCentre: {
    alignItems: 'center',
  },

  borderBottom: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    borderLeftColor: colours.brandWhite,
    borderRightColor: colours.brandWhite,
    borderTopColor: colours.brandWhite,
    borderBottomColor: colours.borderLight,
    borderStyle: 'solid',
    borderWidth: 0.5,
  },

  ...Platform.select({
    ios: {
      headerImage: {
        width: 200,
        height: 50,
      },
    },
    android: {
      headerImage: {
        width: 250,
        height: 65,
      },
    },
  }),

  bodyTextHeader: {
    fontFamily: typography.fontMain,
    fontSize: typography.mediumLargeSize,
    paddingBottom: 20,
  },

  bodyText: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    paddingBottom: 20,
  },

  footer: {
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: colours.borderLight,
    borderLeftColor: colours.brandWhite,
    borderRightColor: colours.brandWhite,
    borderBottomColor: colours.brandWhite,
    borderStyle: 'solid',
    borderWidth: 0.5,
  },

  footerText: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
  },
});

export default styles;
