import {
  StyleSheet,
} from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },

  imageCentre: {
    // flex: 1,
    // justifyContent: 'center',
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

  headerImage: {
    width: 200,
    height: 50,
  },

  bodyTextHeader: {
    fontFamily: typography.fontMain,
    color: colours.textDark,
    fontSize: 22,
    paddingBottom: 20,
    fontWeight: 'bold',
  },

  bodyText: {
    fontFamily: typography.fontMainLight,
    color: colours.textDark,
    paddingBottom: 20,
  },

  footerText: {
    fontFamily: typography.fontMainLight,
    color: colours.textDark,
    paddingTop: 20,
  },

  listTextHeader: {
    fontFamily: typography.fontMain,
    color: colours.brandPurple,
    fontSize: 14,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
