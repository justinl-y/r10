import {
  StyleSheet,
} from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    paddingBottom: 20,
  },

  headerText: {
    flexDirection: 'row',
    paddingBottom: 20,
  },

  listHeaderText: {
    fontFamily: typography.fontMain,
    color: colours.brandPurple,
    fontSize: typography.baseSize,
  },
});

export default styles;
