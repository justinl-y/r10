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
    borderLeftColor: colours.white,
    borderRightColor: colours.white,
    borderTopColor: colours.white,
    borderBottomColor: colours.lightGrey,
    borderStyle: 'solid',
    borderWidth: 0.5,
    //height: StyleSheet.hairlineWidth,
  },

  headerImage: {
    width: 200,
    height: 50,
  },

  bodyTextHeader: {
    fontFamily: typography.fontMain,
    color: colours.mediumGrey,
    fontSize: 22,
    paddingBottom: 20,
    fontWeight: 'bold',
  },

  bodyText: {
    fontFamily: typography.fontMainLight,
    color: colours.mediumGrey,
    paddingBottom: 20,
  },

  listTextHeader: {
    fontFamily: typography.fontMain,
    color: colours.purple,
    fontSize: 14,
    paddingBottom: 20,
    fontWeight: 'bold',
  },

});

export default styles;
