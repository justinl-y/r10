import {
  StyleSheet,
} from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: typography.fontMainLight,
    color: colours.mediumGrey,
    paddingTop: 20,
    paddingBottom: 20,
  },

  headerText: {
    flexDirection: 'row',
  },

  listHeaderText: {
    color: colours.purple,
    fontFamily: typography.fontMain,
    fontSize: 14,
    // marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
